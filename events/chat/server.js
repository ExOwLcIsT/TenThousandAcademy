import { WebSocketServer } from "ws";

const server = new WebSocketServer({
  port: 8081,
});

const roomMap = new Map();
function broadcastToRoom(roomName, data, exceptSocket = null) {
  const room = roomMap.get(roomName);
  if (!room) return;
  const json = JSON.stringify(data);
  for (const clientWs of room.members) {
    if (clientWs !== exceptSocket && clientWs.readyState === clientWs.OPEN) {
      clientWs.send(json);
    }
  }
}
server.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (raw) => {
    const message = JSON.parse(raw.toString());
    switch (message.type) {
      case "join": {
        const roomName = message["roomName"];
        if (!roomMap.has(roomName)) {
          roomMap.set(roomName, { members: new Set(), messages: [] });
        }
        const room = roomMap.get(roomName);
        if (room.members.has(socket)) {
          break;
        }
        room.members.add(socket);
        socket.roomName = roomName;
        socket.nickname = message.nickname;
        broadcastToRoom(
          roomName,
          {
            type: "user-joined",
            nickname: socket.nickname,
          },
          socket,
        );
        const membersOnline = [...room.members].map((s) => s.nickname);
        socket.send(
          JSON.stringify({
            type: "room-state",
            messages: room.messages,
            membersOnline,
          }),
        );
        break;
      }
      case "message": {
        if (!socket.roomName || !socket.nickname) {
          return;
        }
        const room = roomMap.get(socket.roomName);
        const entry = { author: socket.nickname, text: message.text };
        room.messages.push(entry);

        broadcastToRoom(socket.roomName, { type: "message", ...entry });
        break;
      }
      case "typing": {
        if (!socket.roomName || !socket.nickname) {
          return;
        }
        const entry = { nickname: socket.nickname };

        broadcastToRoom(socket.roomName, { type: "typing", ...entry }, socket);
        break;
      }
      case "not-typing": {
        if (!socket.roomName || !socket.nickname) {
          return;
        }
        const entry = { nickname: socket.nickname };

        broadcastToRoom(
          socket.roomName,
          { type: "not-typing", ...entry },
          socket,
        );
        break;
      }
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
    if (!socket.roomName || !socket.nickname) {
      return;
    }
    const entry = { nickname: socket.nickname };

    broadcastToRoom(socket.roomName, { type: "user-left", ...entry }, socket);
    roomMap.get(socket.roomName).members.delete(socket);
  });
});

console.log("WebSocket server is running on ws://localhost:8081");

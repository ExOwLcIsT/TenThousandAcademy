const ws = new WebSocket("ws://localhost:8081");

const joinContainer = document.getElementById("join-container");
const roomContainer = document.getElementById("room-container");
const messagesEl = document.getElementById("message-container");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const typingEl = document.getElementById("typing-nicknames");
const roomNameEl = document.getElementById("room-name");
const typingNicknames = new Set();
const membersOnline = new Set();
const membersOnlineEl = document.getElementById("online-members");

ws.onopen = () => {
  console.log("Connected to server");
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  switch (data.type) {
    case "room-state":
      data.messages.forEach(addMessage);
      console.log(data);
      membersOnlineEl.innerText =
        "Online: " + [...data.membersOnline].join(", ");
      break;

    case "message":
      addMessage(data);
      break;

    case "user-joined":
      addSystemLine(`${data.nickname} joined`);
      membersOnline.add(data.nickname);
      membersOnlineEl.innerText = "Online: " + [...membersOnline].join(", ");
      break;

    case "user-left":
      addSystemLine(`${data.nickname} left the room`);
      membersOnline.delete(data.nickname);
      membersOnlineEl.innerText = "Online: " + [...membersOnline].join(", ");
      break;

    case "typing": {
      typingNicknames.add(data.nickname);
      typingEl.innerText =
        [...typingNicknames].join(", ") +
        (typingNicknames.size === 1 ? " is" : " are") +
        " typing";
      break;
    }
    case "not-typing": {
      typingNicknames.delete(data.nickname);
      if (typingNicknames.size === 0) {
        typingEl.innerText = "";
        break;
      }
      typingEl.innerText =
        typingNicknames.join(", ") +
        (typingNicknames.size === 1 ? " is" : " are") +
        " typing";
      break;
    }
  }
};

ws.onclose = () => {
  console.log("Disconnected from server");
};

function addMessage({ author, text }) {
  const div = document.createElement("div");
  div.className = "message";
  const messageSender = document.createElement("div.sender");
  messageSender.className = "sender";
  messageSender.textContent = author;
  const messageText = document.createElement("div.text");
  messageText.className = "text";
  messageText.textContent = text;
  div.appendChild(messageSender);
  div.appendChild(messageText);
  messagesEl.appendChild(div);
}

function addSystemLine(text) {
  const div = document.createElement("div");
  div.className = "system-line";
  div.style.color = "gray";
  div.textContent = text;
  messagesEl.appendChild(div);
}

document.getElementById("join").addEventListener("click", () => {
  const nickname = document.getElementById("nickname").value.trim();
  const roomName = document.getElementById("room").value.trim();

  if (!nickname || !roomName) {
    alert("Enter the nickname and the room name");
    return;
  }
  if (ws.readyState !== WebSocket.OPEN) {
    console.warn("Connection is not established");
    return;
  }
  ws.send(
    JSON.stringify({
      nickname,
      roomName,
      type: "join",
    }),
  );
  roomContainer.style.visibility = "visible";
  joinContainer.style.display = "none";
  roomNameEl.innerText = roomName;
  membersOnline.add(nickname);
});

function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  if (ws.readyState !== WebSocket.OPEN) {
    console.warn("Connection is not established");
    return;
  }

  ws.send(JSON.stringify({ type: "message", text }));
  messageInput.value = "";
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

sendBtn.addEventListener("click", sendMessage);
const throttledTyping = throttle(() => {
  ws.send(JSON.stringify({ type: "typing" }));
}, 3000);
const debouncedNotTyping = debounce(
  () => ws.send(JSON.stringify({ type: "not-typing" })),
  2000,
);
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    sendMessage();
    ws.send(JSON.stringify({ type: "not-typing" }));
    return;
  }
  debouncedNotTyping();
  throttledTyping();
});

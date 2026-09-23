function sortLeaderboard(players) {
  for (let i = 0; i < players.length - 1; i++) {
    let minEl = players[i].score;
    let minIndex = i;
    for (let j = i + 1; j < players.length; j++) {
      if (players[j].score < minEl) {
        minEl = players[j].score;
        minIndex = j;
      }
    }
    [players[i], players[minIndex]] = [players[minIndex], players[i]];
  }
  return players;
}

console.log(
  sortLeaderboard([
    { name: "Alice", score: 430 },
    { name: "Bob", score: 780 },
    { name: "Carol", score: 210 },
    { name: "Dave", score: 560 },
  ]),
);

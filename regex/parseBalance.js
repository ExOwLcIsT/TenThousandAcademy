function parseBalance(str) {
  const result = /[\-\+]?\d+/.exec(str);
  return result ? result[0] : result;
}
console.log(parseBalance("Hey, I have 1000$ lol"));
console.log(parseBalance("Hey, I'm broke :("));

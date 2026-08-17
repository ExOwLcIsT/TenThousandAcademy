//Приклад з використанням раніше написаних функцій

// import { parseInteger } from "./parseNumber.js";
// import split from "./split.js";
// const parseBalance = (message) => {
//   const words = split(message, " ");
//   for (let i = 0; i < words.length; i++) {
//     const numberFromWord = parseInteger(words[i]);
//     if (!Number.isNaN(numberFromWord)) return numberFromWord;
//   }
//   return null;
// };

const parseBalance = (message) => {
  message = String(message);
  let number = 0;
  let sign = 1;
  let currentlyOnNumber = false;
  for (let i = 0; i < message.length; i++) {
    const symbol = message.charCodeAt(i);
    if (
      symbol === 45 &&
      message.charCodeAt(i + 1) >= 48 &&
      message.charCodeAt(i + 1) < 57
    ) {
      sign = -1;
      currentlyOnNumber = true;
      continue;
    }
    if (symbol >= 48 && symbol < 57) {
      number *= 10;
      number += symbol - 48;
      currentlyOnNumber = true;
    } else if (currentlyOnNumber === true) {
      return sign * number;
    }
  }
  return null;
};

console.log(parseBalance("Hey, - I have +1000$ lol-"));
console.log(parseBalance("Hey, I'm broke :("));

function parseBalance(text) {
  text = String(text);
  let currentMax = 0;
  let diff = 0;
  let summ = 0;
  let number = 0;
  let isParsingNumber = false;
  let isFraction = false;
  let afterComaPlace = 10;
  for (let i = 0; i < text.length; i++) {
    const symbol = text.charCodeAt(i);
    const nextSymbol = text.charCodeAt(i + 1);
    const prevSymbol = text.charCodeAt(i - 1);
    if (symbol === 45 && nextSymbol >= 48 && nextSymbol < 58) {
      sign = -1;
    }
    if (
      (symbol === 46 || symbol === 44) &&
      nextSymbol >= 48 &&
      nextSymbol < 58 &&
      prevSymbol >= 48 &&
      prevSymbol < 58
    ) {
      isFraction = true;
      continue;
    }
    if (symbol >= 48 && symbol < 58) {
      isParsingNumber = true;
      if (!isFraction) {
        number = number * 10 + (symbol - 48);
        continue;
      }
      number += (symbol - 48) / afterComaPlace;
      afterComaPlace *= 10;
    } else if (isParsingNumber) {
      if (number > currentMax) {
        diff = number - summ;
        currentMax = number;
      } else {
        diff -= number;
      }

      afterComaPlace = 10;
      isParsingNumber = false;
      isFraction = false;
      summ += number;
      number = 0;
      continue;
    }
  }
  return diff;
}

console.log(
  parseBalance(
    "I paid 750.50 USDT 14690 and 921.25 USDT. My wallet balance is  USDT.",
  ),
);

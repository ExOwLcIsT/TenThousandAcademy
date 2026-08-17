function parseBalance(text) {
  text = String(text);
  let sign = 1;
  let number = 0;
  let isFraction = false;
  let afterComaPlace = 10;
  let isParsingNumber = false;
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
      return sign * number;
      break;
    }
  }
  return null;
}

console.log(parseBalance("there - is -123,0000341 USDT"));

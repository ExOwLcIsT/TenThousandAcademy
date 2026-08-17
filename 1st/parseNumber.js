const RADIX_SYMBOLS = {
  2: "0B",
  8: "0O",
  16: "0X",
};
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16,
  H: 17,
  I: 18,
  J: 19,
  K: 20,
  L: 21,
  M: 22,
  N: 23,
  O: 24,
  P: 25,
  Q: 26,
  R: 27,
  S: 28,
  T: 29,
  U: 30,
  V: 31,
  W: 32,
  X: 33,
  Y: 34,
  Z: 35,
};
function normalizeDigit(digit) {
  if (digit >= 48 && digit < 57) {
    return digit - 48;
  } else if (digit >= 65 && digit <= 90) {
    return digit - 55;
  }
  return null;
}
function validateDigit(digit, radix) {
  return digit >= 0 && digit < radix;
}
function parseInteger(str, radix) {
  str = String(str).trim().toUpperCase();

  if (radix < 2 || radix > 36) {
    return NaN;
  }
  if (!str) {
    return NaN;
  }
  let startIndex = 0;
  let sign = 1;
  const firstChar = str.charCodeAt(startIndex);
  switch (firstChar) {
    case 45:
      sign = -1;
      startIndex++;
      break;
    case 43:
      startIndex++;
      break;
  }
  if (!radix) {
    if (str[startIndex] === "0") {
      switch (str[startIndex + 1]) {
        case "B":
          radix = 2;
          startIndex += 2;
          break;
        case "O":
          radix = 8;
          startIndex += 2;
          break;
        case "X":
          radix = 16;
          startIndex += 2;
          break;
        default:
          radix = 10;
          break;
      }
    } else radix = 10;
  }
  let number = 0;
  if (!Object.keys(DIGITS).slice(0, radix).includes(str[startIndex])) {
    return NaN;
  }
  for (let i = startIndex; i < str.length; i++) {
    const digit = normalizeDigit(str.charCodeAt(i));
    if (digit === null || !validateDigit(digit, radix)) {
      return sign * number;
    }
    number *= radix;
    number += digit;
  }
  return sign * number;
}

function parseFloat(str) {
  if (!str) {
    return NaN;
  }
  if (str === "NaN") return NaN;
  if (str === "Infinity") return Infinity;
  if (str === "-Infinity") return -Infinity;
  str = String(str).trim().toUpperCase();
  const radix = 10;
  let fractionPlace = 1;
  let number = 0;
  let isFraction = false;
  let sign = 1;
  const firstChar = str[0];
  switch (firstChar) {
    case "-":
      sign = -1;
      break;
    case "+":
      break;
    default:
      if (str.charCodeAt(0) < 48 || str.charCodeAt(0) > 57) {
        return NaN;
      }
      number = number * fractionPlace + normalizeDigit(str.charCodeAt(0));
  }
  //out of loop in case of finding "E"
  let i = 1;
  for (; i < str.length; i++) {
    if (str[i] === ".") {
      if (isFraction) break;
      isFraction = true;
      continue;
    }
    if (str.charCodeAt(i) < 48 || str.charCodeAt(i) > 57) {
      break;
    }

    number = number * radix + (str.charCodeAt(i) - 48);
    if (isFraction) {
      fractionPlace *= radix;
    }
  }
  if (str[i] === "E") {
    const exponent = parseInteger(str.substr(i + 1));
    fractionPlace /= radix ** exponent;
  }
  return (sign * number) / fractionPlace;
}

export { parseInteger, parseFloat };

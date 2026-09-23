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
const getDigits = (radix) => {
  return Object.keys(DIGITS).slice(0, radix);
};
function parseInteger(str, radix) {
  try {
    str = String(str).trim().toUpperCase();

    if (radix < 2 || radix > 36) {
      return NaN;
    }
    if (!str) {
      return NaN;
    }
    const signAndPrefixRegex = new RegExp(
      `^(?<sign>[\+\-]?)(?<prefix>${radix ? "" : `0[XBO]`})?`,
      "y",
    );
    const { sign, prefix } = signAndPrefixRegex.exec(str).groups;
    if (!radix) {
      switch (prefix) {
        case "0X": {
          radix = 16;
          break;
        }
        case "0B": {
          radix = 2;
          break;
        }
        case "0O": {
          radix = 8;
          break;
        }
        default: {
          radix = 10;
        }
      }
    }
    const digits = getDigits(radix);
    const numberRegex = new RegExp(`(?<number>[${digits}]+)`, "y");
    numberRegex.lastIndex = signAndPrefixRegex.lastIndex;
    const number = numberRegex.exec(str).groups.number;
    let multiplier = 1;
    let result = 0;
    for (let i = number.length - 1; i >= 0; i--, multiplier *= radix) {
      const digit = number.charCodeAt(i);
      result += normalizeDigit(digit) * multiplier;
    }

    return sign === "-" ? -result : result;
  } catch {
    return NaN;
  }
}
console.log(parseInteger("-123"));

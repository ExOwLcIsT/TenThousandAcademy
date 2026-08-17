function parseScore(text) {
  text = String(text);
  let score = 0;
  let outOf = 0;
  let isTotal = false;
  let isParsingNumber = false;
  for (let i = 0; i < text.length; i++) {
    const symbol = text.charCodeAt(i);
    const nextSymbol = text.charCodeAt(i + 1);
    const prevSymbol = text.charCodeAt(i - 1);
    if (
      symbol === 47 &&
      nextSymbol >= 48 &&
      nextSymbol < 58 &&
      prevSymbol >= 48 &&
      prevSymbol < 58
    ) {
      isTotal = true;
      continue;
    }
    if (symbol >= 48 && symbol < 58) {
      isParsingNumber = true;
      if (!isTotal) {
        score = score * 10 + (symbol - 48);
        continue;
      }
      outOf = outOf * 10 + (symbol - 48);
    } else if (isParsingNumber && isTotal) {
      break;
    } else {
      score = 0;
      outOf = 0;
    }
  }
  return outOf !== 0 ? Math.round((score / outOf) * 100) : null;
}

console.log(parseScore("Student scored 17/20 on the test"));

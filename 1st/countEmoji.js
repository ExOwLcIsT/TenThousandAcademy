function countEmoji(text, emoji) {
  text = String(text);
  const result = {};
  let emojiCount = 0;
  let parsingName = false;
  let currentName = "";
  let parsingEmoji = false;
  let currentEmoji = "";
  let metName = false;
  let metClosingAngleBracket = false;
  let metAt = false;
  for (let i = text.length - 1; i >= 0; i--) {
    let symbol = text.charCodeAt(i);
    if (symbol === 32 && !parsingEmoji) {
      continue;
    }
    if (symbol >= 65 && symbol <= 90) {
      symbol += 32;
    }
    if (symbol === 58) {
      if (!parsingName) {
        parsingEmoji = !parsingEmoji;

        if (!parsingEmoji) {
          if (currentEmoji === emoji) {
            if (metName) {
              emojiCount = 0;
              metName = !metName;
            }
            emojiCount++;
          }
          currentEmoji = "";
        }
        continue;
      }
    }
    if (symbol === 62) {
      metClosingAngleBracket = true;
      continue;
    }
    if (symbol === 47 && metClosingAngleBracket) {
      metClosingAngleBracket = false;
      parsingName = true;
      parsingEmoji = false;
      currentEmoji = "";
      continue;
    }
    if (parsingEmoji) {
      currentEmoji = String.fromCharCode(symbol) + currentEmoji;
      continue;
    }
    if (parsingName) {
      if (symbol === 64) {
        metAt = true;

        continue;
      }
      if (symbol === 60 && metAt) {
        metAt = false;
        parsingName = false;
        metName = true;
        if (!result[currentName]) {
          result[currentName] = 0;
        }
        result[currentName] += emojiCount;
        currentName = "";
        continue;
      }
      if (symbol !== 32)
        currentName = String.fromCharCode(symbol) + currentName;
    }
  }
  return result;
}
const text =
  ":apple: :apple: <@Kate />:apple: <@Max/><@alisa /> :like: received:apple::apple: "; 
console.log(countEmoji(text, "apple"));

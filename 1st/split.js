function split(text, divider = "") {
  text = String(text);
  divider = String(divider);
  const stringArray = [""];
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    counter = 0;
    for (let j = 0; j < divider.length; j++) {
      if (text.charAt(i + j) !== divider.charAt(j)) {
        break;
      }
      counter++;
    }
    if (counter === divider.length) {
      stringArray.push("");
      i += counter - 1;
      continue;
    }

    stringArray[stringArray.length - 1] += text[i];
  }
  return stringArray;
}
export default split;

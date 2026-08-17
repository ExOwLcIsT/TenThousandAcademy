function getSortedString(strArray) {
  const str = strArray.join("");
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    result[charCode] = String.fromCharCode(charCode);
  }
  return result.join("");
}

console.log(getSortedString(["hello", "zelda", "world", "its", "jeka"]));
console.log(getSortedString(["привет", "мир", "земля"]));
console.log(getSortedString(["مرحبا", "عالم"]));

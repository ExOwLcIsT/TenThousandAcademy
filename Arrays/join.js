function join(array, separator) {
  if (!Array.isArray(array)) return String(array);
  separator = String(separator);
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += String(array[i]) + (i === array.length - 1 ? "" : separator);
  }
  return result;
}

console.log(join([1, 2, 3, 4, 5], " "));

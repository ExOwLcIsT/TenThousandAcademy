function flat(array, depth = 1) {
  let newArray = Array.from(array);
  let result = Array.from(newArray);
  for (let j = 0; j < depth; j++) {
    newArray = result;
    result = [];
    for (let i = 0; i < newArray.length; i++) {
      result = result.concat(newArray[i]);
    }
  }
  return result;
}

console.log(flat([1, [2, [3, 4]]], 2));

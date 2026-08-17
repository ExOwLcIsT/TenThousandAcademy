function findNSmallest(array, n) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (result.length < n) {
      result.push(array[i]);
      continue;
    }
    let maxIndex = 0;
    let currentMax = result[0];
    for (let j = 1; j < result.length; j++) {
      if (result[j] > currentMax) {
        currentMax = result[j];
        maxIndex = j;
      }
    }
    if (currentMax > array[i]) {
      for (j = maxIndex; j < result.length - 1; j++) {
        result[j] = result[j + 1];
      }
      result[result.length - 1] = array[i];
    }
  }
  return result;
}
console.log(findNSmallest([1, 2, 3, 4, 5], 3));
console.log(findNSmallest([5, 4, 3, 2, 1], 3));
console.log(findNSmallest([1, 2, 3, 1, 2], 3));
console.log(findNSmallest([1, 2, 3, -4, 0], 3));
console.log(findNSmallest([1, 2, 3, 4, 5], 0));

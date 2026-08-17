function mergeSort(arr, left = 0, right) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (!right) right = arr.length;
  let L = arr.slice(left, (left + right) / 2);

  let R = arr.slice((left + right) / 2, right);
  if (L.length !== 1) {
    L = mergeSort(L);
  }
  if (R.length !== 1) {
    R = mergeSort(R);
  }
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  for (; leftIndex < L.length && rightIndex < R.length; ) {
    if (L[leftIndex] < R[rightIndex]) {
      result.push(L[leftIndex++]);
      continue;
    }
    result.push(R[rightIndex++]);
  }
  for (; leftIndex < L.length; leftIndex++) {
    result.push(L[leftIndex]);
  }
  for (; rightIndex < R.length; rightIndex++) {
    result.push(R[rightIndex]);
  }
  return result;
}
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([1, 5, 3, 2, 5]));
console.log(mergeSort([5, 4, 3, 4, 5]));
console.log(mergeSort([20, -3, 4, 5, -10]));

function countingSort(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  const cntArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!cntArr[arr[i]]) {
      cntArr[arr[i]] = 0;
    }
    cntArr[arr[i]]++;
  }
  for (let i = 1; i < cntArr.length; i++) {
    if (!cntArr[i - 1]) {
      cntArr[i - 1] = 0;
    }
    if (!cntArr[i]) {
      cntArr[i] = 0;
    }
    cntArr[i] += cntArr[i - 1];
  }
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[--cntArr[arr[i]]] = arr[i];
  }
  return result;
}
console.log(countingSort([2, 5, 3, 0, 2, 3, 0, 3]));

console.log(countingSort([1, 4, 0, 2, 1, 1]));

function insertionSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([1, 2, 3, 4, 5]));
console.log(insertionSort([1, 5, 3, 2, 5]));
console.log(insertionSort([5, 4, 3, 4, 5]));
console.log(insertionSort([20, -3, 4, 5, -10]));

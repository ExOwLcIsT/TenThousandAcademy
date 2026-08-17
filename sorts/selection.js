function selectionSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  for (let i = 0; i < arr.length; i++) {
    let minEl = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minEl) {
        minEl = arr[j];
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
}

console.log(selectionSort([1, 2, 3, 4, 5]));
console.log(selectionSort([1, 5, 3, 2, 5]));
console.log(selectionSort([5, 4, 3, 4, 5]));
console.log(selectionSort([20, -3, 4, 5, -10]));

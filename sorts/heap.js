function heapify(arr, n) {
  if (!Array.isArray(arr)) return undefined;
  if (!n) n = arr.length - 1;
  for (let i = n; i >= 1; i--) {
    const parentIndex = i % 2 === 0 ? (i - 2) / 2 : (i - 1) / 2;
    if (arr[parentIndex] < arr[i]) {
      [arr[parentIndex], arr[i]] = [arr[i], arr[parentIndex]];
    }
  }
  return arr;
}
function heapSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    heapify(arr, i);
    [arr[i], arr[0]] = [arr[0], arr[i]];
  }
  return arr;
}
console.log(heapSort([9, 4, 3, 8, 10, 2, 5]));
console.log(heapSort([1, 5, 3, 2, 5]));
console.log(heapSort([5, 4, 3, 4, 5]));
console.log(heapSort([20, -3, 4, 5, -10]));

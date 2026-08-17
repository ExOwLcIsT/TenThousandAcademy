function bubbleSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  let swapped;

  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([1, 5, 3, 2, 5]));
console.log(bubbleSort([5, 4, 3, 4, 5]));
console.log(bubbleSort([20, -3, 4, 5, -10]));

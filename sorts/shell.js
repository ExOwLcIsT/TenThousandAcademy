function shellSort(arr, gap) {
  if (!Array.isArray(arr)) return undefined;
  if (!gap) gap = Math.floor(arr.length / 2);
  for (let i = 0; i + gap < arr.length; i++) {
    let key = arr[i + gap];
    let j = i + gap - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  if (gap === 1) return arr;
  return shellSort(arr, Math.floor(gap / 2));
}
console.log(shellSort([22, 34, 25, 12, 64, 11, 90, 88, 45]));
console.log(shellSort([1, 5, 3, 2, 5]));
console.log(shellSort([5, 4, 3, 4, 5]));
console.log(shellSort([20, -3, 4, 5, -10]));

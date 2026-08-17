function quickSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  const middle = Math.floor(arr.length / 2);
  const pivot = arr[middle];
  let L = [];
  let R = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === middle) {
      continue;
    }
    if (arr[i] < pivot) {
      L.push(arr[i]);
      continue;
    }
    R.push(arr[i]);
  }
  if (L.length > 1) {
    L = quickSort(L);
  }
  if (R.length > 1) {
    R = quickSort(R);
  }
  L.push(pivot);
  return L.concat(R);
}
console.log(quickSort([1, 2, 3, 4, 5]));
console.log(quickSort([1, 5, 3, 2, 5]));
console.log(quickSort([5, 4, 3, 4, 5]));
console.log(quickSort([20, -3, 4, 5, -10]));

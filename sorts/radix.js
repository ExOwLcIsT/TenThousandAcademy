function radixSort(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  for (let exp = 1; Math.floor(maxElement / exp) > 0; exp *= 10) {
    arr.sort((a, b) => {
      return (Math.floor(a / exp) % 10) - (Math.floor(b / exp) % 10);
    });
  }
  return arr;
}
console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));

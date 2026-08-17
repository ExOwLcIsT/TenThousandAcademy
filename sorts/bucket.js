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
function bucketSort(arr) {
  if (!Array.isArray(arr)) return undefined;
  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    let bi = Math.floor(n * arr[i]);
    buckets[bi].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}

let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];
bucketSort(arr);
console.log("Sorted array is:");
console.log(arr.join(" "));

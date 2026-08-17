const minRUN = 32;

// Calculate minimum run length (kept small here for demo)
function calcMinRun(n) {
  let r = 0;
  while (n >= minRUN) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}

// Insertion sort for small ranges
function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// Merge two sorted subarrays [l..m] and [m+1..r]
function merge(arr, l, m, r) {
  const left = arr.slice(l, m + 1);
  const right = arr.slice(m + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) arr[k++] = left[i++];
    else arr[k++] = right[j++];
  }
  while (i < left.length) arr[k++] = left[i++];
  while (j < right.length) arr[k++] = right[j++];
}

// Detect ascending/descending run starting at index "start"
function findRun(arr, start, n) {
  let end = start + 1;
  if (end === n) return end;

  if (arr[end] < arr[start]) {
    // descending
    while (end < n && arr[end] < arr[end - 1]) end++;
    let sub = arr.slice(start, end).reverse();
    for (let i = start; i < end; i++) arr[i] = sub[i - start];
  } else {
    // ascending
    while (end < n && arr[end] >= arr[end - 1]) end++;
  }
  return end;
}

// Timsort main function
function timsort(arr) {
  const n = arr.length;
  const minRun = calcMinRun(n);
  const runs = [];

  let i = 0;
  while (i < n) {
    let runEnd = findRun(arr, i, n);
    let runLen = runEnd - i;

    // Extend short runs to minRun using insertion sort
    if (runLen < minRun) {
      let end = Math.min(i + minRun, n);
      insertionSort(arr, i, end - 1);
      runEnd = end;
    }
    runs.push([i, runEnd]);
    i = runEnd;

    while (runs.length > 1) {
      const [l1, r1] = runs[runs.length - 2];
      const [l2, r2] = runs[runs.length - 1];
      const len1 = r1 - l1,
        len2 = r2 - l2;

      if (len1 <= len2) {
        merge(arr, l1, r1 - 1, r2 - 1);
        runs.pop();
        runs[runs.length - 1] = [l1, r2];
      } else break;
    }
  }

  while (runs.length > 1) {
    const [l1, r1] = runs[runs.length - 2];
    const [l2, r2] = runs[runs.length - 1];
    merge(arr, l1, r1 - 1, r2 - 1);
    runs.pop();
    runs[runs.length - 1] = [l1, r2];
  }
}

// Example usage
let arr = [5, 21, 7, 23, 19, 10, 1, 3, 2];
timsort(arr);

console.log(arr.join(" "));

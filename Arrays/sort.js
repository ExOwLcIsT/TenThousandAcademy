function sort(
  array,
  compareFn = (a, b) => a.toString().localeCompare(b.toString()),
) {
  const arrayCopy = [...array];
  for (let i = 0; i < arrayCopy.length - 1; i++) {
    for (let j = 0; j < arrayCopy.length - 1 - i; j++) {
      const nextIdx = j + 1;
      if (compareFn(arrayCopy[j], arrayCopy[nextIdx]) > 0) {
        [arrayCopy[j], arrayCopy[nextIdx]] = [arrayCopy[nextIdx], arrayCopy[j]];
      }
    }
  }
  return arrayCopy;
}
const arr = [80, 9, 2];
console.log(sort(arr, (a, b) => b - a));
console.log(arr.sort());

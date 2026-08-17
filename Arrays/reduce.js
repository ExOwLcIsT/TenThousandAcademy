function reduce(array, callBackFn, currentValue) {
  const startIndex = currentValue ? 0 : 1;
  currentValue ??= array[0];
  for (let i = startIndex; i < array.length; i++) {
    currentValue = callBackFn(currentValue, array[i]);
  }
  return currentValue;
}
function reduceRight(array, callBackFn, currentValue) {
  const startIndex = currentValue ? array.length - 1 : array.length - 2;
  currentValue ??= array[array.length - 1];
  for (let i = startIndex; i >= 0; i--) {
    currentValue = callBackFn(currentValue, array[i]);
  }
  return currentValue;
}
console.log(
  reduce(
    [1, 2, 3, 4, 5],
    (accumulator, currentValue) => accumulator - currentValue,
  ),
);
console.log(
  reduceRight([[1, 2], [3, 4], [5]], (accumulator, currentValue) =>
    accumulator.concat([currentValue]),
  ),
);

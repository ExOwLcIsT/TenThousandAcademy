// /**
//  * @param {number} x
//  * @return {number}
//  */
// var mySqrt = function (x) {
//   let left = 0;
//   let right = x;
//   while (left < right) {
//     const i = Math.floor((left + right) / 2);
//     if (i * i === x) return i;
//     if (i * i < x) {
//       if ((i + 1) * (i + 1) > x) return i;
//       left = i + 1;
//     } else right = i;
//   }
//   return x;
// };
// console.log(mySqrt(5));

function findNearestCityIndex(distances, x) {
  let left = 0;
  let right = distances.length - 1;
  while (left < right) {
    const i = Math.floor((left + right) / 2);
    if (i === left || i === right) {
      return Math.abs(distances[left] - x) <= Math.abs(distances[right] - x)
        ? left
        : right;
    }
    if (Math.abs(distances[i] - x) < Math.abs(distances[i - 1] - x)) {
      left = i;
    } else {
      right = i;
    }
  }
  return distances.length - 1;
}
const cities = [10, 20, 30, 40, 50, 60, 70];
console.log(findNearestCityIndex([10, 20, 30, 40, 50, 60, 70], 35));
console.log(findNearestCityIndex([10, 20, 30, 40, 50, 60, 70], 45));
console.log(findNearestCityIndex([10, 20, 30, 40, 50, 60, 70], 66));

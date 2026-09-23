function findNearestCityIndex(distances, x) {
  let left = 0;
  let right = distances.length - 1;
  while (left < right) {
    const i = Math.floor((left + right) / 2);
    if (i === left || i === right) {
      if (Math.abs(distances[left] - x) <= Math.abs(distances[right] - x)) {
        return left;
      }
      return right;
    }
    if (Math.abs(distances[i] - x) < Math.abs(distances[i - 1] - x)) {
      left = i;
    } else {
      right = i;
    }
  }
}
const cities = [10, 20, 30, 40, 50, 60, 70];
console.log(findNearestCityIndex(cities, 0));
console.log(findNearestCityIndex(cities, 10));
console.log(findNearestCityIndex(cities, 35));
console.log(findNearestCityIndex(cities, 45));
console.log(findNearestCityIndex(cities, 55));
console.log(findNearestCityIndex(cities, 65));
console.log(findNearestCityIndex(cities, 70));

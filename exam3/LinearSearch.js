function findNearestCityIndex(distances, x) {
  let minDistance = Math.abs(distances[0] - x);
  for (let i = 1; i < distances.length; i++) {
    const distance = Math.abs(distances[i] - x);
    if (distance < minDistance) {
      minDistance = distance;
      continue;
    }
    return i - 1;
  }
  return distances.length - 1;
}
const cities = [10, 20, 30, 40, 50, 60, 70];
console.log(findNearestCityIndex(cities, 35));

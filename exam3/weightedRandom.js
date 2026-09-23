function WeightedRandom(banners) {
  let priceSum = banners.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);
  let randomValue = Math.random() * priceSum;
  for (let i = 0; i < banners.length; i++) {
    if (randomValue < banners[i].price) {
      banners[i].show++;
      return banners[i];
    }
    randomValue -= banners[i].price;
  }
  banners[banners.length - 1].show++;
  return banners[banners.length - 1];
}
const ads = [
  { name: "ad1", price: 1.8, show: 0 },
  { name: "ad2", price: 1.55, show: 0 },
  { name: "ad3", price: 1.13, show: 0 },
  { name: "ad4", price: 0.48, show: 0 },
];
const MAX_RUNS = 1_000_000;
// const MAX_RUNS = 100;
for (let i = 0; i < MAX_RUNS; i++) {
  WeightedRandom(ads);
}
console.log(ads);

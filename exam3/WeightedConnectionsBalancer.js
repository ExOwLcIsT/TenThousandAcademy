function WeightedBalancer(banners) {
  let minWeightedIndex = 0;
  for (let i = 1; i < banners.length; i++) {
    if (
      banners[i].show / banners[i].price <
      banners[minWeightedIndex].show / banners[minWeightedIndex].price
    ) {
      minWeightedIndex = i;
    }
  }
  banners[minWeightedIndex].show++;
  return banners[minWeightedIndex];
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
  WeightedBalancer(ads);
}
console.log(ads);

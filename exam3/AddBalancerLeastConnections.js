function spreadTrafficEvenlyWithLeastConnections(banners) {
  for (let i = 1; i < banners.length; i++) {
    if (banners[i].show < banners[i - 1].show) {
      banners[i].show++;
      return banners[i];
    }
  }
  banners[0].show++;
  return banners[0];
}

const ads = [
  { name: "ad1", price: 1.8, show: 0 },
  { name: "ad2", price: 1.55, show: 0 },
  { name: "ad3", price: 1.13, show: 0 },
  { name: "ad4", price: 0.48, show: 0 },
];
const MAX_RUNS = 1_000_000;
for (let i = 0; i < MAX_RUNS; i++) {
  spreadTrafficEvenlyWithLeastConnections(ads);
}
console.log(ads);

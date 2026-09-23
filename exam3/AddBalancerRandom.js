function spreadTrafficEvenlyWithRandom(banners) {
  const index = Math.floor(Math.random() * (banners.length));
  banners[index].show++;
  return banners[index];
}
const ads = [
  { name: "ad1", price: 1.8, show: 0 },
  { name: "ad2", price: 1.55, show: 0 },
  { name: "ad3", price: 1.13, show: 0 },
  { name: "ad4", price: 0.48, show: 0 },
];
const MAX_RUNS = 1_000_000;
for (let i = 0; i < MAX_RUNS; i++) {
  spreadTrafficEvenlyWithRandom(ads);
}
console.log(ads);

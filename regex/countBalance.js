const countBalance = (str) => {
  const balance = /(?<=balance\D*)\b\d+/i.exec(str);
  const spent = str.match(/(?<!balance\D*)\b\d+/gi);
  return spent.reduce((left, current) => {
    return left - current;
  }, balance[0]);
};
console.log(
  countBalance(
    " I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.",
  ),
);

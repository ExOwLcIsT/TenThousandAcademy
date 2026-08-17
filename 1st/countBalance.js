const text =
  "I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT.";

function countBalance(str) {
  let number = 0;
  let spent = 0;
  let balance = 0;
  let started = false;
  let isBalance = false;

  for (let i = 0; i <= str.length; i++) {
    const code = str.charCodeAt(i);

    // detect word: balance
    if (
      str[i] === "b" &&
      str[i + 1] === "a" &&
      str[i + 2] === "l" &&
      str[i + 3] === "a" &&
      str[i + 4] === "n" &&
      str[i + 5] === "c" &&
      str[i + 6] === "e"
    ) {
      isBalance = true;
    }

    if (code >= 48 && code <= 57) {
      started = true;
      number = number * 10 + (code - 48);
    } else if (started) {
      if (isBalance) {
        balance = number;
      } else {
        spent += number;
      }

      number = 0;
      started = false;
    }
  }

  return balance - spent;
}

console.log(countBalance(text));

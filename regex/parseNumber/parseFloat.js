function parseFloat(str) {
  if (!str) {
    return NaN;
  }
  str = String(str).trim();
  const regex =
    /(?<sign>[\+\-]?)(?<isStrNaN>NaN)?(?<isInfinity>Infinity)?(?<beforeTheDot>[\d]+)\.?(?<afterTheDot>[\d]*)?(?<exp>e(?<expSign>[\+\-])(?<expNumber>[\d]+))?/i;
  const {
    sign,
    isStrNaN,
    isInfinity,
    beforeTheDot,
    afterTheDot,
    exp,
    expSign,
    expNumber,
  } = regex.exec(str).groups;
  console.log([
    sign,
    isStrNaN,
    isInfinity,
    beforeTheDot,
    afterTheDot,
    exp,
    expSign,
  ]);
  if (isStrNaN) return NaN;
  if (isInfinity) {
    return sign === "-" ? -Infinity : Infinity;
  }

  let number = 0;
  let multiplier = 1;
  for (let i = beforeTheDot.length - 1; i >= 0; i--) {
    number += (beforeTheDot.charCodeAt(i) - 48) * multiplier;
    multiplier *= 10;
  }
  number += afterTheDot / 10 ** afterTheDot.length;
  if (exp) {
    multiplier = expSign === "-" ? (1 / 10 ** expNumber) : (10 ** expNumber);
    number *= multiplier;
  }
  return sign === "-" ? -number : number;
}
console.log(parseFloat("-123.321e-3"));

import { parseInteger, parseFloat } from "../parseNumber.js";
console.log(parseInteger("0b101", 16));
console.log(parseFloat("1.4e2"));
console.log(`Number.parseInt('123'): ${Number.parseInt("123")}`);
console.log(`parseInteger('123'): ${parseInteger("123")}`);
console.log(`Number.parseInt('-123'): ${Number.parseInt("-123")}`);
console.log(`parseInteger('-123'): ${parseInteger("-123")}`);
console.log(`Number.parseInt('+123'): ${Number.parseInt("+123")}`);
console.log(`parseInteger('+123'): ${parseInteger("+123")}`);
console.log(`Number.parseInt('0'): ${Number.parseInt("0")}`);
console.log(`parseInteger('0'): ${parseInteger("0")}`);
console.log(`Number.parseInt('007'): ${Number.parseInt("007")}`);
console.log(`parseInteger('007'): ${parseInteger("007")}`);
console.log(`Number.parseInt('  42  '): ${Number.parseInt("  42  ")}`);
console.log(`parseInteger('  42  '): ${parseInteger("  42  ")}`);
console.log(`Number.parseInt('12abc'): ${Number.parseInt("12abc")}`);
console.log(`parseInteger('12abc'): ${parseInteger("12abc")}`);
console.log(`Number.parseInt('abc'): ${Number.parseInt("abc")}`);
console.log(`parseInteger('abc'): ${parseInteger("abc")}`);
console.log(`Number.parseInt(''): ${Number.parseInt("")}`);
console.log(`parseInteger(''): ${parseInteger("")}`);
console.log(`Number.parseInt('0x1F'): ${Number.parseInt("0x1F")}`);
console.log(`parseInteger('0x1F'): ${parseInteger("0x1F")}`);
console.log(`Number.parseInt('1F', 16): ${Number.parseInt("1F", 16)}`);
console.log(`parseInteger('1F', 16): ${parseInteger("1F", 16)}`);
console.log(`Number.parseInt('101', 2): ${Number.parseInt("101", 2)}`);
console.log(`parseInteger('101', 2): ${parseInteger("101", 2)}`);
console.log(`Number.parseInt('z', 36): ${Number.parseInt("z", 36)}`);
console.log(`parseInteger('z', 36): ${parseInteger("z", 36)}`);
console.log(`Number.parseInt('ZZ', 36): ${Number.parseInt("ZZ", 36)}`);
console.log(`parseInteger('ZZ', 36): ${parseInteger("ZZ", 36)}`);
console.log(`Number.parseInt('777', 8): ${Number.parseInt("777", 8)}`);
console.log(`parseInteger('777', 8): ${parseInteger("777", 8)}`);
console.log(`Number.parseInt('10', 37): ${Number.parseInt("10", 37)}`);
console.log(`parseInteger('10', 37): ${parseInteger("10", 37)}`);
console.log(`Number.parseInt('10', 1): ${Number.parseInt("10", 1)}`);
console.log(`parseInteger('10', 1): ${parseInteger("10", 1)}`);
console.log(`Number.parseInt(null): ${Number.parseInt(null)}`);
console.log(`parseInteger(null): ${parseInteger(null)}`);
console.log(`Number.parseInt(undefined): ${Number.parseInt(undefined)}`);
console.log(`parseInteger(undefined): ${parseInteger(undefined)}`);
console.log(`Number.parseInt(true): ${Number.parseInt(true)}`);
console.log(`parseInteger(true): ${parseInteger(true)}`);
console.log(`Number.parseInt(false): ${Number.parseInt(false)}`);
console.log(`parseInteger(false): ${parseInteger(false)}`);
console.log(`Number.parseInt(123): ${Number.parseInt(123)}`);
console.log(`parseInteger(123): ${parseInteger(123)}`);
console.log(`Number.parseInt(123.99): ${Number.parseInt(123.99)}`);
console.log(`parseInteger(123.99): ${parseInteger(123.99)}`);
console.log(`Number.parseInt([42]): ${Number.parseInt([42])}`);
console.log(`parseInteger([42]): ${parseInteger([42])}`);
console.log(`Number.parseInt([1,2]): ${Number.parseInt([1, 2])}`);
console.log(`parseInteger([1,2]): ${parseInteger([1, 2])}`);
console.log(`Number.parseInt({}): ${Number.parseInt({})}`);
console.log(`parseInteger({}): ${parseInteger({})}`);
console.log(`Number.parseInt(NaN): ${Number.parseInt(NaN)}`);
console.log(`parseInteger(NaN): ${parseInteger(NaN)}`);
console.log(`Number.parseInt(Infinity): ${Number.parseInt(Infinity)}`);
console.log(`parseInteger(Infinity): ${parseInteger(Infinity)}`);
console.log(`Number.parseInt('0b101'): ${Number.parseInt("0b101")}`);
console.log(`parseInteger('0b101'): ${parseInteger("0b101")}`);

console.log(`Number.parseInt('0o77'): ${Number.parseInt("0o77")}`);
console.log(`parseInteger('0o77'): ${parseInteger("0o77")}`);

console.log(`Number.parseInt('0x'): ${Number.parseInt("0x")}`);
console.log(`parseInteger('0x'): ${parseInteger("0x")}`);

console.log(`Number.parseInt('+0x10'): ${Number.parseInt("+0x10")}`);
console.log(`parseInteger('+0x10'): ${parseInteger("+0x10")}`);

console.log(`Number.parseInt('-0x10'): ${Number.parseInt("-0x10")}`);
console.log(`parseInteger('-0x10'): ${parseInteger("-0x10")}`);

console.log(`Number.parseInt('0xFG'): ${Number.parseInt("0xFG")}`);
console.log(`parseInteger('0xFG'): ${parseInteger("0xFG")}`);

console.log(`Number.parseInt('2', 2): ${Number.parseInt("2", 2)}`);
console.log(`parseInteger('2', 2): ${parseInteger("2", 2)}`);

console.log(`Number.parseInt('08', 8): ${Number.parseInt("08", 8)}`);
console.log(`parseInteger('08', 8): ${parseInteger("08", 8)}`);

console.log(`Number.parseInt('123', 10.9): ${Number.parseInt("123", 10.9)}`);
console.log(`parseInteger('123', 10.9): ${parseInteger("123", 10.9)}`);

console.log(`Number.parseInt('123', NaN): ${Number.parseInt("123", NaN)}`);
console.log(`parseInteger('123', NaN): ${parseInteger("123", NaN)}`);

console.log(`Number.parseInt('123', null): ${Number.parseInt("123", null)}`);
console.log(`parseInteger('123', null): ${parseInteger("123", null)}`);

console.log(`Number.parseInt('123', true): ${Number.parseInt("123", true)}`);
console.log(`parseInteger('123', true): ${parseInteger("123", true)}`);

console.log(`Number.parseFloat('.5'): ${Number.parseFloat(".5")}`);
console.log(`parseFloat('.5'): ${parseFloat(".5")}`);

console.log(`Number.parseFloat('5.'): ${Number.parseFloat("5.")}`);
console.log(`parseFloat('5.'): ${parseFloat("5.")}`);

console.log(`Number.parseFloat('.'): ${Number.parseFloat(".")}`);
console.log(`parseFloat('.'): ${parseFloat(".")}`);

console.log(`Number.parseFloat('1e'): ${Number.parseFloat("1e")}`);
console.log(`parseFloat('1e'): ${parseFloat("1e")}`);

console.log(`Number.parseFloat('1e+'): ${Number.parseFloat("1e+")}`);
console.log(`parseFloat('1e+'): ${parseFloat("1e+")}`);

console.log(`Number.parseFloat('1e-'): ${Number.parseFloat("1e-")}`);
console.log(`parseFloat('1e-'): ${parseFloat("1e-")}`);

console.log(`Number.parseFloat('1.e2'): ${Number.parseFloat("1.e2")}`);
console.log(`parseFloat('1.e2'): ${parseFloat("1.e2")}`);

console.log(`Number.parseFloat('.5e2'): ${Number.parseFloat(".5e2")}`);
console.log(`parseFloat('.5e2'): ${parseFloat(".5e2")}`);

console.log(`Number.parseFloat('-.5'): ${Number.parseFloat("-.5")}`);
console.log(`parseFloat('-.5'): ${parseFloat("-.5")}`);

console.log(`Number.parseFloat('+.5'): ${Number.parseFloat("+.5")}`);
console.log(`parseFloat('+.5'): ${parseFloat("+.5")}`);

console.log(
  `Number.parseFloat('Infinityabc'): ${Number.parseFloat("Infinityabc")}`,
);
console.log(`parseFloat('Infinityabc'): ${parseFloat("Infinityabc")}`);
console.log(`Number.parseFloat('3.14'): ${Number.parseFloat("3.14")}`);
console.log(`parseFloat('3.14'): ${parseFloat("3.14")}`);
console.log(`Number.parseFloat('-3.14'): ${Number.parseFloat("-3.14")}`);
console.log(`parseFloat('-3.14'): ${parseFloat("-3.14")}`);
console.log(`Number.parseFloat('+3.14'): ${Number.parseFloat("+3.14")}`);
console.log(`parseFloat('+3.14'): ${parseFloat("+3.14")}`);
console.log(`Number.parseFloat('0.001'): ${Number.parseFloat("0.001")}`);
console.log(`parseFloat('0.001'): ${parseFloat("0.001")}`);
console.log(`Number.parseFloat('007'): ${Number.parseFloat("007")}`);
console.log(`parseFloat('007'): ${parseFloat("007")}`);
console.log(`Number.parseFloat('  3.14  '): ${Number.parseFloat("  3.14  ")}`);
console.log(`parseFloat('  3.14  '): ${parseFloat("  3.14  ")}`);
console.log(`Number.parseFloat('1.4e-2'): ${Number.parseFloat("1.4e-2")}`);
console.log(`parseFloat('1.4e-2'): ${parseFloat("1.4e-2")}`);
console.log(`Number.parseFloat('4.34E-12'): ${Number.parseFloat("4.34E-12")}`);
console.log(`parseFloat('4.34E-12'): ${parseFloat("4.34E-12")}`);
console.log(`Number.parseFloat('-1.5e-3'): ${Number.parseFloat("-1.5e-3")}`);
console.log(`parseFloat('-1.5e-3'): ${parseFloat("-1.5e-3")}`);
console.log(`Number.parseFloat('0.001E+3'): ${Number.parseFloat("0.001E+3")}`);
console.log(`parseFloat('0.001E+3'): ${parseFloat("0.001E+3")}`);
console.log(`Number.parseFloat('1e10'): ${Number.parseFloat("1e10")}`);
console.log(`parseFloat('1e10'): ${parseFloat("1e10")}`);
console.log(`Number.parseFloat('NaN'): ${Number.parseFloat("NaN")}`);
console.log(`parseFloat('NaN'): ${parseFloat("NaN")}`);
console.log(`Number.parseFloat('Infinity'): ${Number.parseFloat("Infinity")}`);
console.log(`parseFloat('Infinity'): ${parseFloat("Infinity")}`);
console.log(
  `Number.parseFloat('-Infinity'): ${Number.parseFloat("-Infinity")}`,
);
console.log(`parseFloat('-Infinity'): ${parseFloat("-Infinity")}`);
console.log(`Number.parseFloat(''): ${Number.parseFloat("")}`);
console.log(`parseFloat(''): ${parseFloat("")}`);
console.log(`Number.parseFloat(null): ${Number.parseFloat(null)}`);
console.log(`parseFloat(null): ${parseFloat(null)}`);
console.log(`Number.parseFloat(undefined): ${Number.parseFloat(undefined)}`);
console.log(`parseFloat(undefined): ${parseFloat(undefined)}`);
console.log(`Number.parseFloat(true): ${Number.parseFloat(true)}`);
console.log(`parseFloat(true): ${parseFloat(true)}`);
console.log(`Number.parseFloat(false): ${Number.parseFloat(false)}`);
console.log(`parseFloat(false): ${parseFloat(false)}`);
console.log(`Number.parseFloat(123): ${Number.parseFloat(123)}`);
console.log(`parseFloat(123): ${parseFloat(123)}`);
console.log(`Number.parseFloat(123.99): ${Number.parseFloat(123.99)}`);
console.log(`parseFloat(123.99): ${parseFloat(123.99)}`);
console.log(`Number.parseFloat([3.14]): ${Number.parseFloat([3.14])}`);
console.log(`parseFloat([3.14]): ${parseFloat([3.14])}`);
console.log(`Number.parseFloat({}): ${Number.parseFloat({})}`);
console.log(`parseFloat({}): ${parseFloat({})}`);
console.log(`Number.parseFloat('3.14.15'): ${Number.parseFloat("3.14.15")}`);
console.log(`parseFloat('3.14.15'): ${parseFloat("3.14.15")}`);
console.log(`Number.parseFloat('abc'): ${Number.parseFloat("abc")}`);
console.log(`parseFloat('abc'): ${parseFloat("abc")}`);

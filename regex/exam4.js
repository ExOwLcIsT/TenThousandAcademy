// const phones = /\d{6,}|(\+\d{2})?(\s?\(\d{3}\)\s?|\d{3}\-)\d{3}-\d{2}-\d{2}/g;
// const text =
//   "Hello Mike. Here is my phone number +38 (098) 330-00-03, my wife phone number 068-339-09-09 and 920462 my sun number 0683390791. Please use same country code +38 to have opportunity to call me";
// console.log([...text.match(phones)]);

// const emailRegexp =
//   /^(?<local>[a-z0-9\_\.\+\—\-]+)@[a-z0-9]+[a-z0-9\.]*[a-z0-9]+\.[a-z]{2,6}$/;

// const isValidEmail = (str) => {
//   return emailRegexp.test(str);
// };

// console.log(isValidEmail("user@example.com"));
// console.log(isValidEmail("user.name+tag@domain.co"));
// console.log(isValidEmail("user@sub.domain.com"));
// console.log(isValidEmail("@domain.com"));
// console.log(isValidEmail("user@.s.com"));
// console.log(isValidEmail("user@domain")); // false — no TLD
// console.log(isValidEmail("user name@domain.com")); // false — space not allowed

const isValidURL = (str) => {
  const urlRegExp =
    /^https?:\/\/[a-z0-9]+[a-z0-9\.]*[a-z0-9]+\.[a-z]{2,6}((?<path>\/?[a-z]+)+((?<query>\?[a-z]+\=[a-z0-9]+(\&[a-z]+\=[a-z0-9]+)?)?|(?<hash>\#[a-z0-9]+)))$/;
  return urlRegExp.test(str);
};

console.log(isValidURL("https://example.com")); // true
console.log(isValidURL("http://sub.domain.co.uk/path")); // true
console.log(isValidURL("https://example.com/path?q=1&r=2")); // true
console.log(isValidURL("https://example.com/path#section")); // true
console.log(isValidURL("ftp://example.com")); // false — ftp not allowed
console.log(isValidURL("https://")); // false — no domain
console.log(isValidURL("https://exam ple.com")); // false — space in domain
console.log(isValidURL("example.com")); // false — no protocol

function includes(str, matchStr, index = 0) {
  str = String(str);
  const regex = new RegExp(matchStr, "y");
  regex.lastIndex = index;
  return regex.test(matchStr);
}

console.log(includes("this is a test string", "test", 10));

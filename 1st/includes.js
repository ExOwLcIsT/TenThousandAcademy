function includes(text, matchStr, index = 0) {
  text = String(text);
  matchStr = String(matchStr);
  if (matchStr.length === 0) return true;
  if (!index) index = 0;
  let counter = 0;
  for (let i = index; i < text.length - matchStr.length + 1; i++) {
    counter = 0;
    for (let j = 0; j < matchStr.length; j++) {
      if (text.charAt(i + j) !== matchStr.charAt(j)) {
        break;
      }
      counter++;
    }
    if (counter === matchStr.length) return true;
  }
  return false;
}

console.log(includes("abcd", "cd", 1));
console.log(`\n=== Test: text="Hello World", matchStr="World", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", 0)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="world", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("world", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "world", 0)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"Hello World".includes("", 0)}`);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "", 0)}`,
);

console.log(
  `\n=== Test: text="Hello World", matchStr="Hello World", index=0 ===`,
);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("Hello World", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "Hello World", 0)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="xyz", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("xyz", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "xyz", 0)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="o W", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("o W", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "o W", 0)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="World", index=6 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", 6)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", 6)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="World", index=7 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", 7)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", 7)}`,
);

console.log(
  `\n=== Test: text="Hello World", matchStr="World", index=undefined ===`,
);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World")}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World")}`,
);

console.log(`\n=== Test: text="", matchStr="", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"".includes("", 0)}`);
console.log(`includes(text, matchStr, index): ${includes("", "", 0)}`);

console.log(`\n=== Test: text="", matchStr="a", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"".includes("a", 0)}`);
console.log(`includes(text, matchStr, index): ${includes("", "a", 0)}`);

console.log(`\n=== Test: text="abcabc", matchStr="bc", index=2 ===`);
console.log(`text.includes(matchStr, index): ${"abcabc".includes("bc", 2)}`);
console.log(`includes(text, matchStr, index): ${includes("abcabc", "bc", 2)}`);

console.log(`\n=== Test: text="abcabc", matchStr="bc", index=3 ===`);
console.log(`text.includes(matchStr, index): ${"abcabc".includes("bc", 3)}`);
console.log(`includes(text, matchStr, index): ${includes("abcabc", "bc", 3)}`);

console.log(`\n=== Test: text="Hello World", matchStr="World", index=-5 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", -5)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", -5)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="World", index=100 ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", 100)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", 100)}`,
);

console.log(`\n=== Test: text="Hello World", matchStr="World", index=NaN ===`);
console.log(
  `text.includes(matchStr, index): ${"Hello World".includes("World", NaN)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("Hello World", "World", NaN)}`,
);

console.log(`\n=== Test: text="привіт світ", matchStr="світ", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"привіт світ".includes("світ", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("привіт світ", "світ", 0)}`,
);

console.log(`\n=== Test: text="  space  ", matchStr=" ", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"  space  ".includes(" ", 0)}`);
console.log(
  `includes(text, matchStr, index): ${includes("  space  ", " ", 0)}`,
);

console.log(`\n=== Test: text="aaaa", matchStr="aaaaa", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"aaaa".includes("aaaaa", 0)}`);
console.log(`includes(text, matchStr, index): ${includes("aaaa", "aaaaa", 0)}`);

console.log(`\n=== Test: text="12345", matchStr="234", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"12345".includes("234", 0)}`);
console.log(`includes(text, matchStr, index): ${includes("12345", "234", 0)}`);

console.log(`\n=== Test: text="123", matchStr=2, index=0 ===`);
console.log(`text.includes(matchStr, index): ${"123".includes(2, 0)}`);
console.log(`includes(text, matchStr, index): ${includes("123", 2, 0)}`);

console.log(`\n=== Test: text="null", matchStr=null, index=0 ===`);
console.log(`text.includes(matchStr, index): ${"null".includes(null, 0)}`);
console.log(`includes(text, matchStr, index): ${includes("null", null, 0)}`);

console.log(
  `\n=== Test: text="undefined value", matchStr=undefined, index=0 ===`,
);
console.log(
  `text.includes(matchStr, index): ${"undefined value".includes(undefined, 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("undefined value", undefined, 0)}`,
);

console.log(`\n=== Test: text="true story", matchStr=true, index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"true story".includes(true, 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("true story", true, 0)}`,
);

console.log(`\n=== Test: text="😀😃😄", matchStr="😃", index=0 ===`);
console.log(`text.includes(matchStr, index): ${"😀😃😄".includes("😃", 0)}`);
console.log(`includes(text, matchStr, index): ${includes("😀😃😄", "😃", 0)}`);

console.log(`\n=== Test: text="CamelCase", matchStr="Case", index=0 ===`);
console.log(
  `text.includes(matchStr, index): ${"CamelCase".includes("Case", 0)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("CamelCase", "Case", 0)}`,
);

console.log(`\n=== Test: text="aaa", matchStr="a", index=-100 ===`);
console.log(`text.includes(matchStr, index): ${"aaa".includes("a", -100)}`);
console.log(`includes(text, matchStr, index): ${includes("aaa", "a", -100)}`);

console.log(`\n=== Test: text="one two three", matchStr="two", index=3 ===`);
console.log(
  `text.includes(matchStr, index): ${"one two three".includes("two", 3)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("one two three", "two", 3)}`,
);

console.log(`\n=== Test: text="one two three", matchStr="two", index=4 ===`);
console.log(
  `text.includes(matchStr, index): ${"one two three".includes("two", 4)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("one two three", "two", 4)}`,
);

console.log(
  `\n=== Test: text="repeat repeat repeat", matchStr="repeat", index=8 ===`,
);
console.log(
  `text.includes(matchStr, index): ${"repeat repeat repeat".includes("repeat", 8)}`,
);
console.log(
  `includes(text, matchStr, index): ${includes("repeat repeat repeat", "repeat", 8)}`,
);

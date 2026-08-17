function stringify(value) {
  return "";
}

function parse(value) {
  value = String(value);
  let currentValue = {};
  let result = {};
  let state = undefined;
  for (let i = 0; i < value.length; i++) {
    if (state !== "openedString" && value.charCodeAt(i) === 32)
      continue;
    switch (value.charCodeAt(i)) {
      case 34: {
        if (state === "openedString") {
          state = undefined;
          continue;
        }
        state = "openedString";
        continue;
      }
      case 93: {
        state = undefined;
        continue;
      }
    }
  }
}

console.log(JSON.parse(`{"a":3}`));
console.log(JSON.stringify("5"));

console.log(JSON.stringify({ a: 5 }));
console.log(String([5]));
console.log(
  JSON.stringify({
    a: 5,
    b: {
      c: 5,
    },
  }),
);
console.log(JSON.stringify({ a: 1, b: [2, 3, 4, 5] }));

console.log("]".charCodeAt(0));

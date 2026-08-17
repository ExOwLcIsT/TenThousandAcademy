
function printSection(title) {
  console.log("\n" + "=".repeat(70));
  console.log(title);
  console.log("=".repeat(70));
  const a = "";
  String.prototype.empty
}

function display(v) {
  if (typeof v === "string") return `"${v}"`;
  if (v === undefined) return "undefined";
  if (typeof v === "number" && Number.isNaN(v)) return "NaN";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object" && v !== null) return JSON.stringify(v);
  return String(v);
}

function runTests(title, fn, cases) {
  printSection(title);
  cases.forEach((c, i) => {
    let result;
    try {
      result = fn(c);
    } catch (e) {
      result = `ПОМИЛКА: ${e.message}`;
    }
    const inputDisplay = typeof c === "string" ? `"${c}"` : String(c);
    console.log(
      `#${String(i + 1).padStart(2, "0")}  input: ${inputDisplay.padEnd(20)} -> ${display(result)}`,
    );
  });
}

/* ------------------------------------------------------------------ */
/* 1. Number.isFinite                                                  */
/* ------------------------------------------------------------------ */
runTests("Number.isFinite(value)", (v) => Number.isFinite(v), [
  0,
  -0,
  1,
  -1,
  3.14,
  Infinity,
  -Infinity,
  NaN,
  "123",
  "abc",
  null,
  undefined,
  true,
  false,
  [],
  [1],
  {},
  Number.MAX_VALUE,
  Number.MIN_VALUE,
  1e308,
]);

/* ------------------------------------------------------------------ */
/* 2. Number.isInteger                                                 */
/* ------------------------------------------------------------------ */
runTests("Number.isInteger(value)", (v) => Number.isInteger(v), [
  0,
  -0,
  5,
  -5,
  5.0,
  5.5,
  -5.5,
  Infinity,
  -Infinity,
  NaN,
  "5",
  null,
  undefined,
  true,
  [5],
  [5, 6],
  {},
  Number.MAX_SAFE_INTEGER,
  Number.MAX_SAFE_INTEGER + 1,
  2 ** 53,
]);

/* ------------------------------------------------------------------ */
/* 3. Number.isNaN                                                     */
/* ------------------------------------------------------------------ */
runTests("Number.isNaN(value)", (v) => Number.isNaN(v), [
  NaN,
  0 / 0,
  Infinity - Infinity,
  parseInt("abc"),
  "NaN",
  undefined,
  null,
  "abc",
  123,
  0,
  Infinity,
  -Infinity,
  true,
  false,
  [],
  [NaN],
  {},
  new Date("invalid"),
  NaN + 1,
  Math.sqrt(-1),
]);

/* ------------------------------------------------------------------ */
/* 4. Number.isSafeInteger                                             */
/* ------------------------------------------------------------------ */
runTests("Number.isSafeInteger(value)", (v) => Number.isSafeInteger(v), [
  0,
  1,
  -1,
  Number.MAX_SAFE_INTEGER,
  Number.MAX_SAFE_INTEGER + 1,
  Number.MIN_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER - 1,
  2 ** 53,
  2 ** 53 - 1,
  3.5,
  NaN,
  Infinity,
  -Infinity,
  "10",
  null,
  undefined,
  true,
  [10],
  {},
  1e21,
]);

/* ------------------------------------------------------------------ */
/* 5. Number(str) — приведення до числа                                */
/* ------------------------------------------------------------------ */
runTests("Number(value)", (v) => Number(v), [
  "123",
  "123.45",
  "  123  ",
  "",
  "abc",
  "0x1F",
  "0b101",
  "0o17",
  "1e3",
  "Infinity",
  "-Infinity",
  null,
  undefined,
  true,
  false,
  [],
  [5],
  [1, 2],
  {},
  "  ",
]);

/* ------------------------------------------------------------------ */
/* 6. parseFloat                                                       */
/* ------------------------------------------------------------------ */
runTests("parseFloat(value)", (v) => parseFloat(v), [
  "3.14",
  "3.14abc",
  "  42  ",
  ".5",
  "5.",
  "1e3",
  "-1.5e-2",
  "Infinity",
  "abc",
  "",
  "0x1F",
  null,
  undefined,
  true,
  [3.14],
  [1, 2],
  123,
  "   ",
  "+5",
  "-0",
]);

/* ------------------------------------------------------------------ */
/* 7. parseInt                                                         */
/* ------------------------------------------------------------------ */
runTests("parseInt(value)", (v) => parseInt(v), [
  "123",
  "123.45",
  "  42  ",
  "0x1F",
  "101",
  "abc",
  "",
  "  ",
  "12abc",
  "abc12",
  null,
  undefined,
  true,
  [42],
  [1, 2],
  123.99,
  "-42",
  "+42",
  Infinity,
  "1e3",
]);

/* ------------------------------------------------------------------ */
/* 8. Number.prototype.toExponential                                   */
/* ------------------------------------------------------------------ */
runTests(
  "num.toExponential(digits)",
  ([num, digits]) =>
    digits === undefined ? num.toExponential() : num.toExponential(digits),
  [
    [123456, undefined],
    [123456, 2],
    [0, undefined],
    [0, 3],
    [1, 0],
    [-123.456, 2],
    [0.000123, 2],
    [1234.5678, 4],
    [9.99999, 2],
    [5, undefined],
    [Number.MAX_VALUE, 2],
    [Number.MIN_VALUE, 2],
    [NaN, 2],
    [Infinity, 2],
    [-Infinity, 2],
    [100, 0],
    [0.1, 5],
    [-0, 2],
    [1e21, 2],
    [3.14159, 3],
  ],
);

/* ------------------------------------------------------------------ */
/* 9. Number.prototype.toFixed                                         */
/* ------------------------------------------------------------------ */
runTests(
  "num.toFixed(digits)",
  ([num, digits]) =>
    digits === undefined ? num.toFixed() : num.toFixed(digits),
  [
    [3.14159, 2],
    [3.14159, undefined],
    [0, 2],
    [-3.14159, 2],
    [1.005, 2],
    [1234.5678, 0],
    [0.1, 1],
    [100, 5],
    [NaN, 2],
    [Infinity, 2],
    [-Infinity, 2],
    [5, 3],
    [1e21, 2],
    [-0, 2],
    [0.000001, 8],
    [123.456, 1],
    [9.995, 2],
    [1.5, 0],
    [-1.5, 0],
    [2 ** 53, 2],
  ],
);

/* ------------------------------------------------------------------ */
/* 10. Number.prototype.toPrecision                                    */
/* ------------------------------------------------------------------ */
runTests(
  "num.toPrecision(digits)",
  ([num, digits]) =>
    digits === undefined ? num.toPrecision() : num.toPrecision(digits),
  [
    [123.456, 4],
    [123.456, undefined],
    [0.00001234, 2],
    [123456, 2],
    [1, 5],
    [0, 3],
    [-123.456, 4],
    [100, 1],
    [9.9999, 3],
    [NaN, 3],
    [Infinity, 3],
    [-Infinity, 3],
    [5, 1],
    [0.1, 1],
    [1234.5, 6],
    [-0, 3],
    [1e21, 3],
    [3.14159265, 6],
    [7, 7],
    [0.000000001, 2],
  ],
);

/* ------------------------------------------------------------------ */
/* 11. Number.prototype.toString                                       */
/* ------------------------------------------------------------------ */
runTests(
  "num.toString(radix)",
  ([num, radix]) =>
    radix === undefined ? num.toString() : num.toString(radix),
  [
    [255, undefined],
    [255, 16],
    [255, 2],
    [255, 8],
    [8, 2],
    [-8, 2],
    [3.14159, undefined],
    [3.14159, 10],
    [0, undefined],
    [-0, undefined],
    [NaN, undefined],
    [Infinity, undefined],
    [-Infinity, undefined],
    [16, 36],
    [100, 36],
    [1000000, undefined],
    [1e21, undefined],
    [-255, 16],
    [1.5, 2],
    [255, 10],
  ],
);

/* ------------------------------------------------------------------ */
/* 12. Number.prototype.valueOf                                        */
/* ------------------------------------------------------------------ */
runTests("num.valueOf()", (v) => v.valueOf(), [
  5,
  -5,
  0,
  -0,
  3.14,
  NaN,
  Infinity,
  -Infinity,
  new Number(42),
  new Number(-7.5),
  new Number(0),
  new Number(NaN),
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
  Number.EPSILON,
  1e100,
  1e-100,
  123456789,
  -123456789,
  2 ** 10,
]);

/* ------------------------------------------------------------------ */
/* 13. Number(numberString) — приведення рядків із числами              */
/* ------------------------------------------------------------------ */
runTests("Number(numberString)", (v) => Number(v), [
  "0",
  "1",
  "-1",
  "3.14159",
  "1_000",
  "1,000",
  "007",
  "1e10",
  "1E10",
  "-1e-10",
  "Infinity",
  "-Infinity",
  "NaN",
  "  3.14  ",
  "3.14.15",
  "0xFF",
  "0b11",
  "0o10",
  "",
  "   ",
]);

/* ------------------------------------------------------------------ */
/* 14. null ?? 0  (нульове злиття)                                     */
/* ------------------------------------------------------------------ */
runTests("value ?? 0", (v) => v ?? 0, [
  null,
  undefined,
  0,
  -0,
  "",
  false,
  NaN,
  "abc",
  1,
  -1,
  [],
  {},
  "0",
  "null",
  "undefined",
  Infinity,
  -Infinity,
  [null],
  [undefined],
  true,
]);

/* ------------------------------------------------------------------ */
/* 15. null || 0  (логічне АБО)                                        */
/* ------------------------------------------------------------------ */
runTests("value || 0", (v) => v || 0, [
  null,
  undefined,
  0,
  -0,
  "",
  false,
  NaN,
  "abc",
  1,
  -1,
  [],
  {},
  "0",
  "null",
  "undefined",
  Infinity,
  -Infinity,
  " ",
  NaN,
  true,
]);

/* ------------------------------------------------------------------ */
/* 16. undefined || 0                                                  */
/* ------------------------------------------------------------------ */
runTests("undefinedLike || 0", (v) => v || 0, [
  undefined,
  void 0,
  (() => {})(),
  {}.foo,
  [].pop(),
  new Map().get("x"),
  null,
  0,
  "",
  false,
  NaN,
  "0",
  1,
  -1,
  [],
  {},
  "abc",
  Infinity,
  -Infinity,
  true,
]);

/* ------------------------------------------------------------------ */
/* 17. 0 || 1                                                           */
/* ------------------------------------------------------------------ */
runTests("leftValue || 1", (v) => v || 1, [
  0,
  -0,
  "",
  null,
  undefined,
  false,
  NaN,
  1,
  2,
  "0",
  "abc",
  [],
  {},
  -1,
  Infinity,
  -Infinity,
  "false",
  " ",
  [0],
  true,
]);

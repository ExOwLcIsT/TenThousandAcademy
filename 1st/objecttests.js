class CustomClass {}
class ExtendsObject extends Object {}
 
function CustomConstructorFn() {}
 
const testCases = [
  // ---------- Групa 1: мають повертати true ----------
  { input: {}, expected: true, description: "Порожній об'єктний літерал {}" },
  { input: { a: 1, b: 2 }, expected: true, description: "Об'єктний літерал з властивостями" },
  { input: new Object(), expected: true, description: "new Object()" },
  { input: Object.create(Object.prototype), expected: true, description: "Object.create(Object.prototype)" },
  { input: JSON.parse('{"x":1}'), expected: true, description: "Результат JSON.parse (звичайний об'єкт)" },
  { input: Object.assign({}, { a: 1 }), expected: true, description: "Object.assign у порожній об'єкт" },
 
  // ---------- Групa 2: примітиви та порожні значення — false ----------
  { input: null, expected: false, description: "null (typeof 'object', але не об'єкт)" },
  { input: undefined, expected: false, description: "undefined" },
  { input: 42, expected: false, description: "число (примітив)" },
  { input: 'hello', expected: false, description: "рядок (примітив)" },
  { input: true, expected: false, description: "булеве значення (примітив)" },
  { input: Symbol('sym'), expected: false, description: "Symbol" },
  { input: 10n, expected: false, description: "BigInt" },
  { input: NaN, expected: false, description: "NaN" },
 
  // ---------- Групa 3: вбудовані об'єкти, що НЕ клас Object напряму — false ----------
  { input: [], expected: false, description: "Порожній масив (Array — нащадок Object)" },
  { input: [1, 2, 3], expected: false, description: "Масив з елементами" },
  { input: new Array(), expected: false, description: "new Array()" },
  { input: new Date(), expected: false, description: "Date" },
  { input: /abc/, expected: false, description: "RegExp-літерал" },
  { input: new RegExp('abc'), expected: false, description: "new RegExp()" },
  { input: new Map(), expected: false, description: "Map" },
  { input: new Set(), expected: false, description: "Set" },
  { input: new WeakMap(), expected: false, description: "WeakMap" },
  { input: new Error('err'), expected: false, description: "Error" },
  { input: new TypeError('err'), expected: false, description: "TypeError (нащадок Error)" },
  { input: Promise.resolve(), expected: false, description: "Promise" },
  { input: function () {}, expected: false, description: "Функція (звичайна)" },
  { input: () => {}, expected: false, description: "Стрілкова функція" },
  { input: new Number(5), expected: false, description: "new Number() — обгорнутий примітив" },
  { input: new String('s'), expected: false, description: "new String() — обгорнутий примітив" },
  { input: new Boolean(true), expected: false, description: "new Boolean() — обгорнутий примітив" },
 
  // ---------- Групa 4: власні класи та їхні екземпляри — false ----------
  { input: new CustomClass(), expected: false, description: "Екземпляр власного класу (дочірній клас)" },
  { input: CustomClass, expected: false, description: "Сам клас (функція-конструктор)" },
  { input: new CustomConstructorFn(), expected: false, description: "Екземпляр функції-конструктора (старий синтаксис класу)" },
  { input: new ExtendsObject(), expected: false, description: "Клас, що явно розширює Object (це вже дочірній клас, constructor !== Object)" },
 
  // ---------- Групa 5: крайні випадки (залежать від точного означення) ----------
  { input: Object.create(null), expected: false, description: "⚠️ Object.create(null) — немає constructor і Object.prototype у ланцюжку" },
  { input: Object.create({}), expected: false, description: "⚠️ прототип — звичайний об'єкт, але не Object.prototype напряму" },
  { input: (function () { return arguments; })(), expected: true, description: "⚠️ об'єкт arguments — у більшості рушіїв constructor === Object" },
  { input: Object.freeze({}), expected: true, description: "Заморожений об'єкт — все ще звичайний Object" },
  { input: Object.seal({ a: 1 }), expected: true, description: "Запечатаний об'єкт — все ще звичайний Object" },
  { input: new Proxy({}, {}), expected: true, description: "⚠️ Proxy над звичайним об'єктом — поведінка залежить від пасток (traps)" },
  { input: globalThis, expected: false, description: "globalThis / window — спеціальний глобальний об'єкт, не проста Object" },
];
 
// ---------- Runner ----------
function runTests(isObjectFn) {
  let passed = 0;
  let failed = 0;
 
  testCases.forEach(({ input, expected, description }, index) => {
    let actual;
    let threw = false;
    try {
      actual = isObjectFn(input);
    } catch (e) {
      threw = true;
      actual = `EXCEPTION: ${e.message}`;
    }
 
    const ok = !threw && actual === expected;
    if (ok) passed++; else failed++;
 
    console.log(
      `${ok ? '✅' : '❌'} [#${index + 1}] ${description}\n` +
      `    очікували: ${expected}, отримали: ${actual}`
    );
  });
 
  console.log(`\nРезультат: ${passed} passed, ${failed} failed з ${testCases.length}`);
}
 
module.exports = { testCases, runTests };
const { testCases, runTests } = require("./objecttests");

function isObject(data) {
  try {
    return data.constructor.name === "Object";
  } catch {
    return false;
  }
  return false;
}
class Parent extends Object {}
class Child extends Parent {}
const o = new Child();
console.log(isObject(Object.prototype));
//Object.getPrototypeOf(i.constructor).name

runTests(isObject);


Array.isArray([]);
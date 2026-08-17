function groupByDataType(arr) {
  const result = {};
  arr.reduce((res, curr) => {
    if (!curr) {
      if (curr === null) {
        if (!res["null"]) {
          res["null"] = [];
        }
        res["null"].push(curr);
      }
      if (curr === undefined) {
        if (!res["undefined"]) {
          res["undefined"] = [];
        }
        res["undefined"].push(curr);
      }
      return res;
    }
    if (Array.isArray(curr)) {
      if (!res["array"]) {
        res["array"] = [];
      }
      res["array"].push(curr);
      return res;
    }
    const currType = typeof curr;
    if (currType !== "object") {
      if (!res[currType]) {
        res[currType] = [];
      }
      res[currType].push(curr);
      return res;
    }
    const ctorName = curr.constructor.name;
    if (!res[ctorName]) {
      res[ctorName] = [];
    }
    res[ctorName].push(curr);

    return res;
  }, result);
  return result;
}

class TestClass {}
console.log(
  groupByDataType([
    { value: 1 },
    { value: 2 },
    5,
    6,
    7,
    "test",
    "test2",
    false,
    null,
    undefined,
    [123],
    [456],
    new Date("2021-06-22"),
    new Set([1, 2, 3]),
    new Map(),
    new TestClass(),
    new TestClass(),
  ]),
);

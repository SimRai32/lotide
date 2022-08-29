const assertEqual = function(actual, expected) {
  let trueOrFalse = true;
  if (actual === undefined || expected === undefined) {
    if (actual !== expected) {
      trueOrFalse = false;
    }
  } else {
    if (actual.toString().length !== expected.toString().length) {
      trueOrFalse = false;
    }
    for (let i = 0; i < expected.toString().length; i++) {
      if (actual.toString()[i] !== expected.toString()[i]) {
        trueOrFalse = false;
      }
    }
  }
  if (!trueOrFalse) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const keys = Object.keys(itemsToCount);
  let itemsCounted = {};
  let counter = 0;
  for (const key of keys) {
    if (itemsToCount[key]) {
      console.log(itemsToCount[key]);
      allItems.forEach(item => {
        if (key === item) {
          counter ++;
        }
      });
      if (counter > 0) {
        itemsCounted[key] = counter;
      } else {
        itemsCounted[key] = undefined;
      }
      counter = 0;
    } else {
      itemsCounted[key] = undefined;
    }
  }
  return itemsCounted;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {"Jason": true, "Karima":true, "Fang":true, "Agouhanna":false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
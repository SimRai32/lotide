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

const findKey = (obj, callback) => {
  const keys = Object.keys(obj);
  let value = undefined;
  for (const key of keys) {
    if (callback(obj[key])) {
      value = key;
      return value;
    }
  }
  return value;
}

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); 

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

const test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: undefined }
}, x => x.stars === undefined);

assertEqual(test, "noma");
assertEqual(test2, undefined);
assertEqual(test3, "Akelarre");

module.exports = findKey;
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

const letterPositions = function(string) {
  let letterPosition = {};
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== " ") {
      if (letterPosition[string[index]]) {
        letterPosition[string[index]].push(index);
      } else {
        letterPosition[string[index]] = [index];
      }
    }
  }
  return letterPosition;
};

const test = letterPositions("lighthouse in the house");

assertEqual(test["l"], [0]);
assertEqual(test["i"], [1,11]);

module.exports = letterPositions;
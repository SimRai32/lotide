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

const countLetters = function(string) {
  let lettersCounted = {};
  const noSpaceString = string.split(" ").join("");
  for (const letter of noSpaceString) {
    if (lettersCounted[letter]) {
      lettersCounted[letter] += 1;
    } else {
      lettersCounted[letter] = 1;
    }
  }
  return lettersCounted;
};

const test = countLetters("lighthouse in the house");

assertEqual(test["l"], 1);
assertEqual(test["h"], 4);
assertEqual(test["o"], 2);
assertEqual(test["s"], 2);


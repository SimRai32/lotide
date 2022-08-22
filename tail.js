// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let store = [];
  for (let i = 1; i < array.length; i++) {
    store[i - 1] = array[i];
  }
  return store;
};
const assertEqual = function(actual, expected) {
  let trueOrFalse = true;
  if (expected === undefined || actual === undefined || actual.toString().length !== expected.toString().length) {
    trueOrFalse = false;
  } else {
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
// TEST CODE
const result = tail(["Hello"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
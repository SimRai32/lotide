// FUNCTION IMPLEMENTATION
const head = function(array) {
  if (array.length === 0){
    return undefined;
  } else{
      return array[0];
  }
}
const assertEqual = function(actual, expected) {
  let trueOrFalse = true;
  if (expected === undefined || actual === undefined || actual.toString().length !== expected.toString().length ) {
    trueOrFalse = false;
  } else{
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
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


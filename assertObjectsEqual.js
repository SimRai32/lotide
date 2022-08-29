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
    return false;
  } else {
    return true;
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  let check = true;
  if (keysOne.length !== keysTwo.length) {
    check = false;
  } else {
    for (const key of keysOne) {
      if (Array.isArray(object1[key])) {
        if (assertEqual(object1[key], object2[key]) === false) {
          console.log("here");
          check = false;
        }
      } else if (object1[key] !== object2[key]) {
        check = false;
      }
    }
  }
  return check;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let results = eqObjects(actual, expected);
  if (results === false){
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`Assertion Passed!!: ${inspect(actual)} === ${inspect(expected)}`);
  }
};


module.exports = assertObjectsEqual;
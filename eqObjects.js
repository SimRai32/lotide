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
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
    return false;
  } else {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
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
          check = false;
        }
      } else if (object1[key] !== object2[key]) {
        check = false;
      }
    }
  }
  return check;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false


module.exports = eqObjects;
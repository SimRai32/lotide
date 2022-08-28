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



const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  if (keysOne.length !== keysTwo.length) {
    return false;
  } 
    for (const key of keysOne) {
      if (Array.isArray(object1[key])) {
        if (assertEqual(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (typeof(object1[key]) === "object") {
        const test = eqObjects(object1[key],  object2[key]);
        if (!test) {
          return false;
        }
      } 
      
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
  return true;
};

module.exports = eqObjects;

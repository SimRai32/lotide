const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysOne = Object.keys(object1);
  const keysTwo = Object.keys(object2);
  let check = true;
  if (keysOne.length !== keysTwo.length) {
    check = false;
  } else {
    for (const key of keysOne) {
      if (Array.isArray(object1[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          check = false;
        }
      } else if (object1[key] !== object2[key]) {
        check = false;
      }
    }
  }
  return check;
};

module.exports = eqObjects;
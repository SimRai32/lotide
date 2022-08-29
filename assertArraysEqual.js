const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayOne, arrayTwo, result) {
  if (!result) {
    return console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  } else {
    return console.log(`Assertion Passed!: ${arrayOne} === ${arrayTwo}`);
  }
};


module.exports = assertArraysEqual;
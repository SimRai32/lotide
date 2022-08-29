const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let midNum = [];
  if (array.length > 2) {
    const midIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
      midNum[0] = array[midIndex - 1];
      midNum[1] = array[midIndex];
    } else {
      midNum [0] = array [midIndex];
    }
  }
  return midNum;
};

module.exports = middle;
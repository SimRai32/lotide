const takeUntil = function(array, callback) {
  let modArray = [];
  let test = true;
  for (const item of array) {
    test = callback(item);
    if (test) {
      return modArray;
    }
    modArray.push(item);
  }
  return modArray;
};

const eqArrays = function(arrayOne, arrayTwo) {
  let check = true;
  if (arrayOne.toString().length !== arrayTwo.toString().length) {
    check = false;
  } else {
    for (let i = 0; i < arrayOne.toString().length; i++) {
      if (arrayOne.toString()[i] !== arrayTwo.toString()[i]) {
        check = false;
      }
    }
    checker(arrayOne, arrayTwo, check);
    return check;
  }
};

const checker = function(arrayOne, arrayTwo, result) {
  if (!result) {
    return console.log(`Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  } else {
    return console.log(`Assertion Passed!: ${arrayOne} === ${arrayTwo}`);
  }
};

const data1 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');


const data3 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results3 = takeUntil(data1, x => x === 5);


eqArrays(results1, data1);

eqArrays(results2[3], "Hollywood");

eqArrays(results3, [1,2]);

module.exports = takeUntil;
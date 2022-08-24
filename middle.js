const eqArrays = function(arrayOne, arrayTwo) {
  let check = true;
  if (arrayOne.length !== arrayTwo.length) {
    check = false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        check = false;
      }
    }
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



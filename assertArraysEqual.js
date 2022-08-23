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
let arr1 = [3, 2, 3];
let arr2 = [1, 2, 3];
let test = eqArrays(arr1, arr2);
checker(arr1, arr2, test);


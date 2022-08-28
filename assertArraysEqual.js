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
    console.log(check);
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



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


module.exports = eqArrays;
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  } else {
    for (let i = 0; i < arrayOne.length; i++) {
      if (Array.isArray(arrayOne[i])) {
        const result =  eqArrays(arrayOne[i], arrayTwo[i]);
        if (!result) {
          return false;
        }
      } else if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
    return true;
  }
};


module.exports = eqArrays;
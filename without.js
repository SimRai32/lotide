const without = function(arrayOne, arrayTwo) {
    let modifiedArr = [];
    let position = 0;
    let checker = true;
    for (let i = 0; i < arrayOne.length; i++) {
      for (let j = 0; j < arrayTwo.length; j++) {
        if (arrayOne[i] === arrayTwo[j]) {
          checker = false;
        }
      }
      if(checker) {
        modifiedArr[position] = arrayOne[i]; 
        position++;
      }
      checker = true;
    }
    return console.log(modifiedArr);
  };

 
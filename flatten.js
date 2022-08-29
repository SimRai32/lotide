const flatten = function(array) {
  let flatArray = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      array[i].forEach(element => {
        flatArray[index] = element;
        index++;
      });
    } else {
      flatArray[index] = array[i];
      index++;
    }
  }
  return console.log(flatArray);
};

flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten;
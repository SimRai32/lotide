const assertEqual = require('./assertEqual');

const letterPositions = function(string) {
  let letterPosition = {};
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== " ") {
      if (letterPosition[string[index]]) {
        letterPosition[string[index]].push(index);
      } else {
        letterPosition[string[index]] = [index];
      }
    }
  }
  return letterPosition;
};
module.exports = letterPositions;
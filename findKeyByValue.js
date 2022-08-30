const assertEqual = require('./assertEqual');

const findKeyByValue = function(listOfShows, showName) {
  let genre = undefined;
  const keys = Object.keys(listOfShows);
  for (const show of keys) {
    if (showName === listOfShows[show]) {
      genre = show;
      break;
    }
  }
  return genre;
};

module.exports = findKeyByValue;
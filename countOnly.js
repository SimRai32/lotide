const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const keys = Object.keys(itemsToCount);
  let itemsCounted = {};
  let counter = 0;
  for (const key of keys) {
    if (itemsToCount[key]) {
      allItems.forEach(item => {
        if (key === item) {
          counter ++;
        }
      });
      if (counter > 0) {
        itemsCounted[key] = counter;
      } else {
        itemsCounted[key] = undefined;
      }
      counter = 0;
    } else {
      itemsCounted[key] = undefined;
    }
  }
  return itemsCounted;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;
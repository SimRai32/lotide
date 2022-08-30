const assert = require('chai').assert;
const findKeyByValue   = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it('return undefined if tv show not listed', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let result = findKeyByValue(bestTVShowsByGenre, "That 70's show");
    assert.isUndefined(result);
  });

  it('return genre if tv show is listed', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    let result = findKeyByValue(bestTVShowsByGenre, "The Wire");
    assert.strictEqual(result, "drama");
  });
});
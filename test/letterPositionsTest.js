const assert = require('chai').assert;
const letterPositions   = require('../letterPositions');

describe('#letterPositions', () => {
  it('returns the index of the first letter', () => {
    const test = letterPositions("lighthouse in the house");
    assert.deepEqual(test["l"], [0]);
  });
  
  it('returns multiple indices of the second letter', () => {
    const test = letterPositions("lighthouse in the house");
    assert.deepEqual(test["i"], [1,11]);
  });
});


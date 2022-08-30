const assert = require('chai').assert;
const flatten   = require('../flatten');

describe('#flatten', () => {
  it('returns a 1 dimensional array when given a multi-dimensional one.', () => {
    const expected = [1,2,3,4,5,6];
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    assert.deepEqual(actual, expected);
  });
});
const chai = require('chai');
const assert = chai.assert;

const eqArrays = require('../eqArrays');

describe('eqArrays', function() {

  it("should return true when given two equal objects", function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4]];
    assert.equal(eqArrays(array1, array2), true);
  });

  it("should return false when given two unequal objects", function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], [4, 5]];
    assert.equal(eqArrays(array1, array2), false);
  });

  it("should return false when given two unequal objects", function() {
    const array1 = [[2, 3], [4]];
    const array2 = [[2, 3], 4];
    assert.equal(eqArrays(array1, array2), false);
  });
});
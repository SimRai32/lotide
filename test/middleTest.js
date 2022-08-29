const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns the two middle elements of an array with an even number of elements", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it("returns the middle element of an array with an odd number of elements", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
});


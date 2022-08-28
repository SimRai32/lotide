const chai = require('chai');
const assert = chai.assert;

const eqObjects = require('../eqObjects');

describe('eqObjects', function() {

  it("should return true when given two equal objects", function() {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(object1, object2), true);
  })

  it("should return false when given two unequal objects", function() {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.equal(eqObjects(object1, object2), false);
  })

  it("should return false when given two unequal objects", function() {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: 1, b: 2 };
    assert.equal(eqObjects(object1, object2), false);
  })
});

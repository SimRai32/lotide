const assert = require('chai').assert;
const eqObjects   = require('../eqObjects');

describe('#eqObjects', () => {
  it('returns true if objects contain identical values in the same keys', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc));
  });

  it('returns false if objects contain identical values in the different keys', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, dc));
  });
});



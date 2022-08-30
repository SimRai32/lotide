const assert = require('chai').assert;
const countOnly   = require('../countOnly');

describe('#countOnly', () => {
  it('returns the number of times the expression appears in an array', () => {
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
    const result = countOnly(firstNames, {"Jason": true, "Karima":true, "Fang":true, "Agouhanna":false});
    assert.strictEqual(result["Jason"], 1);
  });

  it('returns undefined if expression is not found', () => {
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
      const result = countOnly(firstNames, {"Jason": true, "Karima":true, "Fang":true, "Agouhanna":false});
      assert.isUndefined(result["Karima"]);
  });

  it('returns the number of times the expression appears in an array (checking for multiple)', () => {
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
      const result = countOnly(firstNames, {"Jason": true, "Karima":true, "Fang":true, "Agouhanna":false});
      assert.deepEqual(result, { Jason: 1, Karima: undefined, Fang: 2, Agouhanna: undefined });
    });
});
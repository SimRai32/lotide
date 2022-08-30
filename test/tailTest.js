const tail = require('../tail');
const assert = require('chai').assert;
describe('#tail', () => {
  it("returns the correct length of the array", () =>  {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("returns the correct first element of the tail", () =>  {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns the correct second element of the tail", () =>  {
    const result = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs");
  });
  
  it("ensures the original array has not been altered", () =>  {
    const words = (["Yo Yo", "Lighthouse", "Labs"]);
    tail(words);
    assert.strictEqual(words.length, 3);
  });
})

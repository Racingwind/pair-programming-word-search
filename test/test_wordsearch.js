const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ARRY')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'F'],
      ['Y', 'F', 'C', 'F', 'Q'],
      ['H', 'M', 'J', 'T', 'E'],
      ['W', 'H', 'C', 'S', 'Y'],
      ['B', 'F', 'R', 'E', 'N'],
      ['U', 'B', 'T', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q'],
    ], 'MJTE')

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'F'],
      ['Y', 'F', 'C', 'F', 'Q'],
      ['H', 'M', 'J', 'T', 'E'],
      ['W', 'H', 'C', 'S', 'Y'],
      ['B', 'F', 'R', 'E', 'N'],
      ['U', 'B', 'T', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q'],
    ], 'FBDZ')

    assert.isTrue(result);
  });

  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'F'],
      ['Y', 'F', 'C', 'F', 'Q'],
      ['H', 'M', 'J', 'T', 'E'],
      ['W', 'H', 'C', 'S', 'Y'],
      ['B', 'F', 'R', 'E', 'N'],
      ['U', 'B', 'T', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q'],
    ], 'FBKZ')

    assert.isFalse(result);
  });

  it("should return false if there is no given letters", function() {
    const result = wordSearch([], 'FBKZ')

    assert.isFalse(result);
  });

  it("should return false if there is no given word or word is not a string", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'F'],
      ['Y', 'F', 'C', 'F', 'Q'],
      ['H', 'M', 'J', 'T', 'E'],
      ['W', 'H', 'C', 'S', 'Y'],
      ['B', 'F', 'R', 'E', 'N'],
      ['U', 'B', 'T', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q'],
    ], 2)

    assert.isFalse(result);
  });

  it("should return false if there is no given word or word is not a string", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q'],
      ['S', 'E', 'I', 'N', 'F'],
      ['Y', 'F', 'C', 'F', 'Q'],
      ['H', 'M', 'J', 'T', 'E'],
      ['W', 'H', 'C', 'S', 'Y'],
      ['B', 'F', 'R', 'E', 'N'],
      ['U', 'B', 'T', 'W', 'A'],
      ['O', 'D', 'C', 'A', 'K'],
      ['E', 'Z', 'K', 'F', 'Q'],
    ], )

    assert.isFalse(result);
  });

});

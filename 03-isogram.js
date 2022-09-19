function isIsogram(str){
  const splitString = str.toLowerCase().split("")
  for (let i = 0; i < splitString.length; i++) {
    const letter = splitString[i]
    const indexOfRepeat = splitString.slice(i+1).indexOf(letter)
    if (indexOfRepeat !== -1)
      return false
  }
  return true
}


// Can also do `new Set(str).size == str.length`

const chai = require("chai");
const assert = chai.assert;
const mocha = require("mocha")
const describe = mocha.describe;
const it = mocha.it;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});

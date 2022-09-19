function alphabetPosition(text) {
  // let arrayOfLetters = text.toLowerCase().split(/[^a-z]/).join("").split("")
  const UTF16_CODE_OFFSET = 'a'.charCodeAt(0) - 1
  return text.toLowerCase().match(/[a-z]/gi).map(c => c.charCodeAt() - UTF16_CODE_OFFSET).join(" ")
}
console.log(``, alphabetPosition('a fat brown. dog jumps!!'))


// const chai = require("chai");
// const Test = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
// Test.assertEquals(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
//   });
// });
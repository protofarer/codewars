
function isPangram(string) {
  // Used split/join approach instead of <String>.replaceAll(...) because 
  // codewars (possibly browser/runtime incompat?) was throwing 
  // function not found error
  const replacedString = string
    .toLowerCase()
    .split(/[^a-z]/)      // split on regex pattern matching non-alpha
    .join("")             // join, now without the non-alphas
  
  const unique = new Set(replacedString)

  return unique.size === 26
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });

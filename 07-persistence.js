// Write a function, persistence, that takes in a positive parameter num and
// returns its multiplicative persistence, which is the number of times you must
// multiply the digits in num until you reach a single digit.

// e.g.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  // intentionally numerically

  function iterate(num) {
    if (num < 10)
      return
    else {
      n++

      const nDigits = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1
      let digits = []

      for (let i = 10 ** (nDigits - 1); i >= 1; i /= 10) {
        const digit = Math.floor(num/i)
        digits.push(digit)
        num -= digit * i
      }
      console.log(`digits`, digits)
      

      const multiplied = digits.reduce((prev, curr) => prev * curr)
      console.log(`multiplied`, multiplied)
      

      iterate(multiplied)
    }
  }

  let n = 0

  iterate(num)

  return n
}

console.log('count', persistence(1234))
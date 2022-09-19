const zero = (f=null) => f ? f(0) : 0
const one = (f=null) => f ? f(1) : 1
const two = (f=null) => f ? f(2) : 2
const three = (f=null) => f ? f(3) : 3
const four = (f=null) => f ? f(4) : 4
const five = (f=null) => f ? f(5) : 5
const six = (f=null) => f ? f(6) : 6
const seven = (f=null) => f ? f(7) : 7
const eight = (f=null) => f ? f(8) : 8
const nine = (f=null) => f ? f(9) : 9

const plus = (a) => (b) => a + b
const minus = (a) => (b) => b - a
const times = (a) => (b) => a * b
const dividedBy = (a) => (b) => Math.floor(b / a)

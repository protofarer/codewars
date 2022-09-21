const getVal = (x) => x

const zero = (f=getVal) => f(0)
const one = (f=getVal) => f(1)
const two = (f=getVal) => f(2)
const three = (f=getVal) => f(3)
const four = (f=getVal) => f(4)
const five = (f=getVal) => f(5)
const six = (f=getVal) => f(6)
const seven = (f=getVal) => f(7)
const eight = (f=getVal) => f(8)
const nine = (f=getVal) => f(9)

const plus = (a) => (b) => a + b
const minus = (a) => (b) => b - a
const times = (a) => (b) => a * b
const dividedBy = (a) => (b) => Math.floor(b / a)

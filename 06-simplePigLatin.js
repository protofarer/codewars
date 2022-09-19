function pigIt(str) {
  return str
    .split(" ")
    .map(w => {
      return w.match(/[a-z]+/gi)
        ? w.slice(1) + w[0] + "ay"
        : w
    })
    .join(" ")
}

console.log(`${pigIt('Pig latin is cool')}`, )

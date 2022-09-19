function digitalRoot(n) {
  let previousSum = 0;
  let places = countDigits(n);
  let nextSum = n;
  while (places > 1) {
    previousSum = nextSum;
    nextSum = 0;
    for (let i = places - 1; i >= 0; i--) {
      const digit = Math.floor(previousSum / (10 ** i));
      nextSum += digit;
      previousSum -= digit * 10 ** i;
      console.log('digit', digit)
    }
    console.log(`places: ${places} nextSum: ${nextSum}`);
    places = countDigits(nextSum);
  }
  return nextSum;
}


function countDigits(n) {
  let places = 0;
  while (n / (10 ** places) >= 1) {
      places++;
  }
  return places;
}

digitalRoot(10)
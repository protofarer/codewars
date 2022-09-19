function anagrams(word, words) {
  const wordSorted = Array.from(word).sort().join("")
  
  const wordsMatched = words.filter(w => {
    return wordSorted === Array.from(w).sort().join("")
  })
  
  return wordsMatched
}

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
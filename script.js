// find longest word from strings

const findLongestWord = str => {
  if (str.trim().length === 0) {
    return false
  }

  var words = str.split(' ')
  words = words.sort((a, b) => a.length - b.length)

  // console.log('words', words)
  // return words[0]
  return words.at(-1)
}
console.log(findLongestWord('Where developer blogs meet Community power!'))

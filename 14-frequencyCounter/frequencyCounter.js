function frequencyCounter(word) {
  const freq = {};
  for (let i = 0; i < word.length; i++) {
    let key = word[i];
    if (freq[key]) {
      freq[key] += 1;
    } else {
      freq[key] = 1;
    }
 }
  return freq;
}

// Do not edit this line;
module.exports = frequencyCounter;
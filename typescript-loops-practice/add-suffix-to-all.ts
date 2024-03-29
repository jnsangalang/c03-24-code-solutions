/* exported addSuffixToAll */
function addSuffixToAll(words: string[], suffix: string): unknown {
  const arr = [];
  for (let i = 0; i < words.length; i++) {
    const newWord = words[i] + suffix;
    arr.push(newWord);
  }
  return arr;
}

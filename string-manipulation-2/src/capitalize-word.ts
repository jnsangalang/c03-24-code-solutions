/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 's' || (word[i] === 'S' && word[i] === word[4])) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord.charAt(0).toUpperCase() + newWord.substring(1, word.length);
}

console.log(capitalizeWord('jaVAsCrIPt'));

/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  return (
    (word[0].toUpperCase() === word[0] &&
      word.substring(1) === word.substring(1).toLowerCase()) ||
    word.substring(1) === word.substring(1).toUpperCase()
  );
}

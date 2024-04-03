/* exported getWords */
function getWords(string: string): string[] {
  const words = string.split(' ');
  if (string === '') {
    return [];
  } else {
    return words;
  }
}

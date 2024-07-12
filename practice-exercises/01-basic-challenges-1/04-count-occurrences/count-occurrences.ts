export function countOccurrences(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (char.includes(str[i])) {
      count++;
    }
  }
  return count;
}

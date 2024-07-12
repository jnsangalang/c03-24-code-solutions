export function findMissingLetter(arr: string[]): string {
  const beginning = arr[0].charCodeAt(0);
  const missingLetter = arr
    .map((char) => char.charCodeAt(0))
    .find((charNum) => {
      if (charNum - beginning > 1) {
        return true;
      }
      charNum = beginning;
      return false;
    });
  return missingLetter ? String.fromCharCode(missingLetter - 1) : '';
}

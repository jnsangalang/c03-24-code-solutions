/* exported filterOutStrings */
function filterOutStrings(values: any[]): number[] {
  const arr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'number' || values[i] === null) {
      arr.push(values[i]);
    }
  }
  return arr;
}

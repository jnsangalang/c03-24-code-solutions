/* exported getIndexes */
function getIndexes(array: unknown[]): unknown[] {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
}

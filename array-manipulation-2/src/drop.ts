/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const arr = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}

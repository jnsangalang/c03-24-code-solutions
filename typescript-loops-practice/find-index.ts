/* exported findIndex */
function findIndex(array: number[], value: number): unknown {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

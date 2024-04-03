/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const arr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}

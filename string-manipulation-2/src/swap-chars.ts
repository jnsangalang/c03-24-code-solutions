/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const arr = string.split('');

  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];

  return arr.join('');
}

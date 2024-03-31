'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const arr = string.split('');
  [arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
  return arr.join('');
}

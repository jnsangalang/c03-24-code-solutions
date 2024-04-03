'use strict';
/* exported take */
function take(array, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}

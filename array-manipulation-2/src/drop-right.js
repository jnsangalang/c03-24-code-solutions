'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const arr = [];
  for (let i = 0; i < array.length - count; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}

'use strict';
/* exported drop */
function drop(array, count) {
  const arr = [];
  for (let i = count; i < array.length; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}

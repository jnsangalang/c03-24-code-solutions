'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const arr = [];
  for (let i = array.length - count; i < array.length; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
    if (array[i] === undefined) {
      arr.push(array[i]);
    }
    if (count > array.length) {
      return array;
    }
  }
  return arr;
}
console.group(takeRight([4, 5, 6, 7], 5));

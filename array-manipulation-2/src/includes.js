'use strict';
/* exported includes */
function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      console.log(array[i]);
      return true;
    }
  }
  return false;
}

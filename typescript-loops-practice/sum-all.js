'use strict';
/* exported sumAll */
function sumAll(numbers) {
  let sumation = 0;
  for (let index = 0; index < numbers.length; index++) {
    sumation += numbers[index];
  }
  return sumation;
}

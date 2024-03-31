'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  let currentChunk = [];
  for (const element of array) {
    if (currentChunk.length === size) {
      newArr.push(currentChunk);
      currentChunk = [];
    }
    currentChunk.push(element);
  }
  if (currentChunk.length > 0) {
    newArr.push(currentChunk);
  }
  return newArr;
}
console.log(chunk(['foo', 'bar', 'baz', 'qux'], 2));
console.log(chunk([undefined, null, 0, false, NaN, '', undefined], 3));
console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([], 1));

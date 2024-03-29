'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reverse = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word.substring(i, i + 1);
  }
  return reverse;
}

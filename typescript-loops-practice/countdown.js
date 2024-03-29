'use strict';
/* exported countdown */
function countdown(num) {
  const countDownArray = [];
  while (num >= 0) {
    countDownArray.push(num);
    num--;
  }
  return countDownArray;
}

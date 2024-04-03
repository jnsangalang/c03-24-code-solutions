/* exported countdown */
function countdown(num: number): number[] {
  const countDownArray = [];
  while (num >= 0) {
    countDownArray.push(num);
    num--;
  }
  return countDownArray;
}

/* exported sumAll */
function sumAll(numbers: number[]): number {
  let sumation = 0;
  for (let index = 0; index < numbers.length; index++) {
    sumation += numbers[index];
  }
  return sumation;
}

export function sumOfEvenSquares(numbers: number[]): number {
  const evenNumbers: number[] = numbers.filter((num) => num % 2 === 0);
  const squaredEvenNumbers = evenNumbers.map((num) => num * num);
  let initialValue = 0;
  return squaredEvenNumbers.reduce(
    (acc, currentValue) => acc + currentValue,
    initialValue
  );
}

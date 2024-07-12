export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  let result;
  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    throw new Error(`invalid operator :${operator}`);
  }
  return result;
}

/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('Numbers to ten:', getNumbersToTen());

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('Even numbers to 20:', getEvenNumbersToTwenty());

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('cat', 20));

function logEachCharacter(str: string): undefined {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(logEachCharacter('catapult'));

function doubleAll(numbers: number[]): number[] {
  const double = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubleNum = numbers[i] * 2;
    double.push(doubleNum);
  }
  return double;
}
console.log('Doubled numbers:', doubleAll([5, 13, 22, 54, 65, 13]));

type Obj = Record<string, unknown>;

function getKeys(obj: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const person: Obj = {
  name: 'Kat',
  class: 'science',
  pet: 'horse',
  food: 'spaghetti',
  siblings: 5,
};
console.log(
  'Get keys{name:Kat, class:science, pet:horse, food:spaghetti, siblings:5',
  getKeys(person)
);

function getValues(obj: Record<string, unknown>): unknown[] {
  const values = [];
  for (const value in obj) {
    values.push(obj[value]);
  }
  return values;
}
console.log(
  'Get keys{name:Kat, class:science, pet:horse, food:spaghetti, siblings:5',
  getValues(person)
);

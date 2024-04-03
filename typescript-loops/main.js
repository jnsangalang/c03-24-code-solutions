'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('Numbers to ten:', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('Even numbers to 20:', getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log(repeatWord('cat', 20));
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}
console.log(logEachCharacter('catapult'));
function doubleAll(numbers) {
  const double = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubleNum = numbers[i] * 2;
    double.push(doubleNum);
  }
  return double;
}
console.log('Doubled numbers:', doubleAll([5, 13, 22, 54, 65, 13]));
function getKeys(obj) {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}
const person = {
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
function getValues(obj) {
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

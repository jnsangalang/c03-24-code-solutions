'use strict';
const heroes = ['Black Canary', 'The Flash', 'Starfire', 'Gambit'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('The random number:', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Hero:', randomHero);
const library = [
  { title: 'New Day', author: 'Mary Watson' },
  { title: 'Old Day', author: 'Hnery Stevenson' },
  { title: 'Day', author: 'Liza Smalls' },
];
const lastBook = library.pop();
console.log('Last book:', lastBook);
const firstBook = library.shift();
console.log('First book:', firstBook);
const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Leftover library:', library);
const fullName = 'Johan Sangalang';
const firstAndLastName = fullName.split(' ');
console.log('First and last name:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
const employee = {
  name: 'Paul Guzman',
  age: 30,
  position: 'Tech Designer',
};
const employeeKeys = Object.keys(employee);
console.log('Employee keys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('Employee values:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('Employee pairs:', employeePairs);

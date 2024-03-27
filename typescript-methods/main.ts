const heroes: string[] = ['Black Canary', 'The Flash', 'Starfire', 'Gambit'];
const randomNumber: number = Math.random();
const randomNumber2: number = randomNumber * heroes.length;

const randomIndex: number = Math.floor(randomNumber2);

console.log('The random number:', randomIndex);
const randomHero: string = heroes[randomIndex];
console.log('Hero:', randomHero);

interface Books {
  title: string;
  author: string;
}
const library: Books[] = [
  { title: 'New Day', author: 'Mary Watson' },
  { title: 'Old Day', author: 'Hnery Stevenson' },
  { title: 'Day', author: 'Liza Smalls' },
];
const lastBook: any = library.pop();
console.log('Last book:', lastBook);

const firstBook: any = library.shift();
console.log('First book:', firstBook);

const js: Books = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Books = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Leftover library:', library);

const fullName: string = 'Johan Sangalang';
const firstAndLastName: any = fullName.split(' ');

console.log('First and last name:', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('Say my name:', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'Paul Guzman',
  age: 30,
  position: 'Tech Designer',
};
const employeeKeys: any = Object.keys(employee);
console.log('Employee keys:', employeeKeys);

const employeeValues: any = Object.values(employee);
console.log('Employee values:', employeeValues);

const employeePairs: any = Object.entries(employee);
console.log('Employee pairs:', employeePairs);

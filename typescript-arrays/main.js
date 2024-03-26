'use strict';
let colors = ['red', 'white', 'blue'];
console.log('First:', colors[0]);
console.log('Second:', colors[1]);
console.log('Third:', colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.'
);
colors[2] = 'green';
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2] + '.'
);
console.log('Colors:', colors);
console.log('Type:', typeof colors);
let students = ['Paul', 'Julia', 'Sandra', 'Carter'];
let numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in this class`);
let lastIndex = numberOfStudents - 1;
let lastStudent = students[lastIndex];
console.log(`The last student in the class is ${lastStudent}.`);
console.log('Students:', students);
console.log('Type:', typeof students);

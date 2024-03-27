'use strict';
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log('Convert Minutes to Seconds:', convertMinutesToSeconds(7));
function greet(name) {
  const greeting = `Hello ${name}!`;
  return greeting;
}
console.log('Greeting:', greet('Johan'));
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
console.log('The area is:', getArea(15, 23));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'Their first name is:',
  getFirstName({ firstName: 'James', lastName: 'Monroe' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log(
  'The last element:',
  getLastElement(['cat', 'pigeon', 'horse', 'cat'])
);
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
console.log(
  'Calling convert minutes to seconds:',
  callOtherFunction(convertMinutesToSeconds, 9)
);
console.log('Calling greet:', callOtherFunction(greet, 'Paul De Guzman'));
console.log(
  'Calling first name:',
  callOtherFunction(getFirstName, { firstName: 'John', lastName: 'Smith' })
);
console.log(
  'Calling last element:',
  callOtherFunction(getLastElement, ['apple', 'orange', 'grape'])
);

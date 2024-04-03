'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number >= 5) {
    return false;
  } else {
    return true;
  }
}
console.log('Are they under 5 years old(4)?', isUnderFive(4));
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is it even (26)?', isEven(26));
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const person = {
  name: 'Jack Hans',
  age: 23,
};
console.log('Can Jack drink (22)?', isOldEnoughToDrink(person));
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const person2 = {
  name: 'Anna Wells',
  age: 14,
};
console.log('Can Anna(14) drive?', isOldEnoughToDrive(person2));
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
  return false;
}
const person3 = {
  name: 'Paul Vera',
  age: 32,
};
console.log(
  'Can Paul(30) drink AND drive?',
  isOldEnoughToDrinkAndDrive(person3)
);
function categorizeAcidity(pH) {
  if (pH === 7) {
    return `neutral`;
  } else if (pH > 7 && pH <= 14) {
    return `basic`;
  } else if (pH >= 0 && pH < 7) {
    return `acidic`;
  } else {
    return false;
  }
}
console.log('categorized acidity:', categorizeAcidity(14));
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return `We're the warner bros`;
      break;
    case 'dot':
      return `I'm cute~`;
      break;
    default:
      return `Goodnight Everybody`;
  }
}
console.log(introduceWarnerBro('wakko'));
console.log(introduceWarnerBro('dot'));
console.log(introduceWarnerBro('johan'));
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Action:Die Hard';
      break;
    case 'comedy':
      return 'Comedy:The Proposal';
      break;
    case 'horror':
      return 'Horror:Final Destination';
      break;
    case 'drama':
      return 'Drama:La La Land';
      break;
    case 'musical':
      return 'Musical:Hairspray';
      break;
    case 'sci-fi':
      return 'Sci-Fi:Resident Evil';
      break;
    default:
      return 'Genre not recognized, please use one the following: action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log(recommendMovie('horror'));

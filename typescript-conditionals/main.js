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
    console.log('This is a neutral substance');
  } else if (pH > 7 && pH <= 14) {
    console.log('This substance is basic');
  } else if (pH >= 0 && pH < 7) {
    console.log('This substance is acidic');
  } else {
    console.log('This substance is INVALID');
  }
}
categorizeAcidity(14);
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log(`The brothers: We're the warner brothers!`);
      break;
    case 'dot':
      console.log(`Dot:I'm cute ~`);
      break;
    default:
      console.log('Who are you? Goodnight everybody!');
  }
}
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('johan');
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Action:Die Hard');
      break;
    case 'comedy':
      console.log('Comedy:The Proposal');
      break;
    case 'horror':
      console.log('Horror:Final Destination');
      break;
    case 'drama':
      console.log('Drama:La La Land');
      break;
    case 'musical':
      console.log('Musical:Hairspray');
      break;
    case 'sci-fi':
      console.log('Sci-Fi:Resident Evil');
      break;
    default:
      console.log(
        'Genre not recognized, please use one the following: action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
recommendMovie('horror');

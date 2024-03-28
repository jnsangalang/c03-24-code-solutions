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
function isUnderFive(number: number): boolean {
  if (number >= 5) {
    return false;
  } else {
    return true;
  }
}
console.log('Are they under 5 years old(4)?', isUnderFive(4));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('Is it even (26)?', isEven(26));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const person: Person = {
  name: 'Jack Hans',
  age: 23,
};
console.log('Can Jack drink (22)?', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const person2: Person = {
  name: 'Anna Wells',
  age: 14,
};
console.log('Can Anna(14) drive?', isOldEnoughToDrive(person2));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 0) {
    return false;
  }
  return false;
}
const person3: Person = {
  name: 'Paul Vera',
  age: 32,
};
console.log(
  'Can Paul(30) drink AND drive?',
  isOldEnoughToDrinkAndDrive(person3)
);

function categorizeAcidity(pH: number): any {
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
function introduceWarnerBro(name: string): any {
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
function recommendMovie(genre: string): any {
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

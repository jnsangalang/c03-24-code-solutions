const width: number = 20;
const height: number = 15;

const area: number = width * height;
console.log('What is the area?', area);
console.log('Type:', typeof area);

const bill: number = 28;
const payment: number = 30;

const change: number = payment - bill;
console.log('What is the change?', change);
console.log('Type:', typeof change);

const quizzes: number = 89;
const midterm: number = 83;
const final: number = 93;

const grade: number = quizzes + midterm + final / 3;
console.log('What is the grade?', grade);
console.log('Type:', typeof grade);

const firstName: string = 'Johan';
const lastName: string = 'Sangalang';

const fullName: string = firstName + ' ' + lastName;
console.log('What is fullname?', fullName);
console.log('Type:', typeof fullName);

const pH: number = 9;
const isAcidic: boolean = pH < 7;

console.log('Is acidic?', isAcidic);
console.log('Type:', typeof isAcidic);

const headCount: number = 222;
const isSparta: boolean = headCount === 300;

console.log('Is Sparta?', isSparta);
console.log('Type:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('What is the motto?', motto);
console.log('Type:', typeof motto);

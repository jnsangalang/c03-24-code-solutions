'use strict';
let student = {
  firstName: 'Johan',
  lastName: 'Sangalang',
  age: 30,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('Fullname is:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'occupational therapy assistant';
console.log('Lives in Irvine?', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);
console.log('Student info:', student);
console.log('Type:', typeof student);
let vehicle = {
  make: 'Subaru',
  model: 'Impreza',
  year: 2022,
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('Color:', vehicle['color']);
console.log('Is it convertible?', vehicle['isConvertible']);
console.log('Vehicle Info:', vehicle);
console.log('Type:', typeof vehicle);
let pet = {
  name: 'Kaze',
  kind: 'Siamese',
};
delete pet['name'];
delete pet.kind;
console.log('Pet:', pet);
console.log('Type:', typeof pet);

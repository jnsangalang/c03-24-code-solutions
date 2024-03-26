interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Johan',
  lastName: 'Sangalang',
  age: 30,
};
const fullName: string = student.firstName + ' ' + student.lastName;
console.log('Fullname is:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'occupational therapy assistant';

console.log('Lives in Irvine?', student.livesInIrvine);
console.log('Previous occupation:', student.previousOccupation);

console.log('Student info:', student);
console.log('Type:', typeof student);
const vehicle: Vehicle = {
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

const pet: Pet = {
  name: 'Kaze',
  kind: 'Siamese',
};

delete pet['name'];
delete pet.kind;

console.log('Pet:', pet);
console.log('Type:', typeof pet);

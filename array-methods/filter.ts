const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evenNum = numbers.filter((num) => num % 2 === 0);
console.log('Even Array:', evenNum);

function filterName(name: string[], query: string): string[] {
  return names.filter(
    (name) => !name.toLowerCase().includes(query.toLowerCase())
  );
}
console.log('Names with no `d`:', filterName(names, 'd'));

const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach(function (values: number) {
  console.log(values);
});

const reverseArr: number[] = [];

for (let i = values.length - 1; i >= 0; i--) {
  reverseArr.push(values[i]);
}

console.log('Reverse order:');
reverseArr.forEach((values) => {
  console.log(values);
});

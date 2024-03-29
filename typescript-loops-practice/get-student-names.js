'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const names = [];
  for (const obj of students) {
    names.push(obj.name);
  }
  return names;
}
const array = [{ name: 'Robert' }, { name: 'Steve' }, { name: 'Ken' }];
console.log(getStudentNames(array));

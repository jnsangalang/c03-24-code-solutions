'use strict';
const arr = [
  { title: 'The Ring', isbn: 7777, author: 'Sandy Kobayashi' },
  { title: 'Happy Death Day', isbn: 1940, author: 'Beatrice Reese' },
  { title: 'The Uninvited', isbn: 1313, author: 'Casey Leran' },
];
console.log('Books:', arr);
console.log('Type of Book:', typeof arr);
console.log('Books JSON-ed:', JSON.stringify(arr));
console.log('Type of JSON books:', typeof JSON.stringify(arr));
const studentJSON = '{"id" : 123456789, "name": "Johan Sangalang"}';
console.log('studentJSON:', studentJSON);
console.log('Type of studentJSON:', typeof studentJSON);
console.log('JSON parse:', JSON.parse(studentJSON));
console.log('Type of parse JSON:', typeof JSON.parse(studentJSON));

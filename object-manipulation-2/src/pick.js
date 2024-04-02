'use strict';
/* exported pick */
function pick(source, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    if (source.hasOwnProperty(keys[i]) && source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}
console.log(pick({ bar: 2 }, ['foo', 'bar', 'baz']));
console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));

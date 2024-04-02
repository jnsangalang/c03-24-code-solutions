'use strict';
/* exported omit */
function omit(source, keys) {
  const result = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
}
console.log(omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));

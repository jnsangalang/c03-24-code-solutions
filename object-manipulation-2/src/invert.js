'use strict';
/* exported invert */
function invert(source) {
  const obj = {};
  for (const key in source) {
    const value = source[key];
    obj[value] = key;
  }
  return obj;
}

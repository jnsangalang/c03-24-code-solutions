'use strict';
/* exported getValues */
function getValues(object) {
  const val = [];
  for (const value in object) {
    val.push(object[value]);
  }
  return val;
}

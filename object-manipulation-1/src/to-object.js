'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const prop = keyValuePair[0];
  obj[prop] = keyValuePair[1];
  return obj;
}

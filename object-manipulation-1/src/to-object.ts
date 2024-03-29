/* exported toObject */
function toObject(keyValuePair: { [key: string]: number }): {
  [key: string]: unknown;
} {
  const obj = {};
  const prop = keyValuePair[0];
  obj[prop] = keyValuePair[1];
  return obj;
}

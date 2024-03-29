/* exported getKeys */
function getKeys(object: { [key: string]: unknown }): unknown {
  const arr: unknown[] = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}

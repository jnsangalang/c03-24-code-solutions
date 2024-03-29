/* exported getValues */
function getValues(object: { [key: string]: unknown }): unknown {
  const val: unknown[] = [];
  for (const value in object) {
    val.push(object[value]);
  }
  return val;
}

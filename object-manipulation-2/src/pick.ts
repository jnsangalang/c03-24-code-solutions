/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): object {
  const result: any = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}

console.log(pick({ bar: 2 }, ['foo', 'bar', 'baz']));
console.log(pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']));

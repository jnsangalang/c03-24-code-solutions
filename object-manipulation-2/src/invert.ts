/* exported invert */
function invert(
  source: Record<string, string | number>
): Record<string, string | number> {
  const obj: any = {};
  for (const key in source) {
    const value = source[key];
    obj[value] = key;
  }
  return obj;
}

/* exported setValue */
function setValue(
  object: { [key: string]: unknown },
  key: any,
  value: unknown
): unknown {
  object[key] = value;
  return object;
}

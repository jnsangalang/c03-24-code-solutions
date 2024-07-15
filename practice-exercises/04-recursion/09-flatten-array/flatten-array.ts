export function flattenArray(arr: unknown[]): unknown[] {
  let splitArray: unknown[] = [];
  arr.forEach((each) => {
    if (Array.isArray(each)) {
      splitArray = splitArray.concat(flattenArray(each));
    } else {
      splitArray.push(each);
    }
  });
  return splitArray;
}

function getRangeReport(start: number, end: number): object {
  const obj = {};
  let sum = 0;
  const oddArr: number[] = [];
  const evenArr: number[] = [];
  const range: number[] = [];
  let average: number = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
    Object.assign(obj, { Total: sum });
  }

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
      Object.assign(obj, { Odd: oddArr });
    }
  }

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
      Object.assign(obj, { Even: evenArr });
    }
  }

  for (let i = start; i <= end; i++) {
    range.push(i);
    Object.assign(obj, { Range: range });
  }

  for (let i = start; i <= end; i++) {
    average += i;
    if (i === end) {
      const final = end - start + 1;
      const ave = average / final;
      Object.assign(obj, { Average: ave });
    }
  }

  return obj;
}
console.log(getRangeReport(1, 5));

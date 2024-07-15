export function twoSum(nums: number[], target: number): [] | [number, number] {
  const setTwoSum = new Set();

  for (let i = 0; i < nums.length; i++) {
    const subtraction = target - nums[i];
    if (setTwoSum.has(subtraction)) {
      return [nums.indexOf(subtraction), i];
    }
    setTwoSum.add(nums[i]);
  }
  return [];
}

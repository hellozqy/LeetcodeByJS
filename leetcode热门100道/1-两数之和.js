/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = new Map();
  for (let i = 0; i < nums.length; i++) {
    const e = nums[i];
    if (m.has(target - e)) {
      return [m.get(target - e), i];
    } else {
      m.set(nums[i], i);
    }
  }
  return null;
};

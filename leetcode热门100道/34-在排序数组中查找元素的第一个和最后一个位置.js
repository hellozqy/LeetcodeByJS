/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let m1, m2;
  while (l < r) {
    m1 = Math.floor((l + r) / 2);
    if (nums[m] < target) {
      l = m1 + 1;
    } else if (nums[m1] > target) {
      r = m1 - 1;
    } else {
      r = m1;
    }
  }
  m1 = l;
  if (nums[m1] !== target) {
    return [-1, -1];
  }
  l = 0;
  r = nums.length - 1;
  while (l < r) {
    m2 = Math.ceil((l + r) / 2);
    if (nums[m] < target) {
      l = m2 + 1;
    } else if (nums[m2] > target) {
      r = m2 - 1;
    } else {
      l = m2;
    }
  }
  m2 = l;
  if (nums[m2] !== target) {
    return [m1, m1];
  }
  return [m1, m2];
};

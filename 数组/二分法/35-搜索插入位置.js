/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let cur = 0;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (target === nums[m]) {
      return m;
    } else if (nums[m] < target) {
      cur = m + 1;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return cur;
};

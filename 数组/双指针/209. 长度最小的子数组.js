/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let m = null;
  let l = 0;
  let r = 0;
  let sum = 0;
  while (r <= nums.length) {
    if (sum >= target) {
      m = m ? Math.min(m, r - l) : r - l;
      sum -= nums[l];
      l++;
    } else {
      sum += nums[r];
      r++;
    }
  }
  return m;
};

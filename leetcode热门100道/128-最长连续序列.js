/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let s = new Set(nums);
  let max = 0;
  for (let a of nums) {
    if (!s.has(a - 1)) {
      let count = 1;
      let cur = a;
      while (s.has(cur + 1)) {
        cur++;
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

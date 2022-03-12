/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0) {
    if (nums[i] < nums[i + 1]) {
      break;
    }
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0) {
      if (nums[j] > nums[i]) {
        break;
      }
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
    l++;
    r--;
  }
};

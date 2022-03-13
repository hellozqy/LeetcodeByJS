/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const find1 = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
		let m;
    while (l < r) {
      m = Math.floor((l + r) / 2);
      if (nums[m] === target) {
        r = m;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return l;
  };
  const find2 = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
		let m;
    while (l < r) {
      m = Math.ceil((l + r) / 2);
      if (nums[m] === target) {
        l = m;
      } else if (nums[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return l;
  };
  let m1 = find1(nums, target);
  let m2 = find2(nums, target);
  return [nums[m1] === target ? m1 : -1, nums[m2] === target ? m2 : -1];
};

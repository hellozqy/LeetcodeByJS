/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function (nums) {
  // 暴力
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = nums[i] * nums[i];
  // }
  // nums.sort((a, b) => a - b);
  // return nums;

  // 双指针
  let res = [];
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let s1 = nums[l] * nums[l];
    let s2 = nums[r] * nums[r];
    if (s1 >= s2) {
      res.unshift(s1);
      l++;
    } else {
      res.unshift(s2);
      r--;
    }
  }
  return res;
};

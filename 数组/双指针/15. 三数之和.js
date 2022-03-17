/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function (nums) {
//   let res = [];
//   nums = nums.sort((a, b) => a - b);
//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let l = i + 1;
//     let r = nums.length - 1;
//     while (l < r) {
//       let sum = nums[l] + nums[i] + nums[r];
//       if (sum > 0) {
//         r--;
//       } else if (sum < 0) {
//         l++;
//       } else {
//         res.push([nums[l], nums[i], nums[r]]);
//         while (r > l && nums[r] === nums[r - 1]) r--;
//         while (r > l && nums[l] === nums[r + 1]) l++;
//         l++;
//         r--;
//       }
//     }
//   }
//   return res;
// };

var threeSum = function (nums) {
	if (nums.length < 3) {
		return []
	}
  let res = new Set();
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0) break;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[i] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.add(`${nums[l]},${nums[i]},${nums[r]}`);
        l++;
        r--;
      }
    }
  }
  return Array.from(res).map(i => i.split(','));
};

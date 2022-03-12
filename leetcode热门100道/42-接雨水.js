/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let len = height.length;
  if (!len) return 0;
  let res = 0;
  let leftMax = [];
  let rightMax = [];
  leftMax[0] = height[0];
  rightMax[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  for (let i = 0; i < len; i++) {
    res += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return res;
};

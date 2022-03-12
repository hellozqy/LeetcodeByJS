/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let win = new Map();
  let left = 0;
  let right = 0;
  let max = 1;
  while (right < s.length) {
    const a = s[right];
    if (win.has(a) && win.get(a) >= left) {
      left = win.get(a) + 1;
    }
    max = Math.max(max, right - left + 1);
    win.set(a, right);
    right++;
  }
  return max;
};

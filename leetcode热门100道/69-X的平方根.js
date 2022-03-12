/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let res = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid <= x) {
      l = mid + 1;
      res = mid;
    } else {
      r = mid - 1;
    }
  }
  return res;
};

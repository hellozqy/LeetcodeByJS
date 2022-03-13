/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let l = 0;
  let r = x;
  let pre = -1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (m * m === x) {
      return m;
    } else if (m * m > x) {
      r = m - 1;
    } else {
      pre = m;
      l = m + 1;
    }
  }
  return pre;
};

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let p = 0;
  let q = 0;
  let res = 1;
  for (let i = 0; i < n; i++) {
    p = q;
    q = res;
    res = p + q;
  }
  return res;
};

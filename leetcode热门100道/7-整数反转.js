/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  while (x) {
    res = res * 10 + (x % 10);
    if (res > 2 ** 31 - 1 || res < -(2 ** 31)) return 0;
    x = parseInt(x / 10);
  }
  return res;
};

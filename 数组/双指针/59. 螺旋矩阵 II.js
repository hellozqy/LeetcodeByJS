/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let x = 0;
  let y = 0;
  let loop = Math.floor(n / 2);
  let m = Math.floor(n / 2);
  let offset = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (loop--) {
    let row = x;
    let col = y;
    for (; col < y + n - offset; col++) {
      res[row][col] = count++;
    }
    for (; row < x + n - offset; row++) {
      res[row][col] = count++;
    }
    for (; col > x; col--) {
      res[row][col] = count++;
    }
    for (; row > y; row--) {
      res[row][col] = count++;
    }
    x++;
    y++;
    offset += 2;
  }
  if (n % 2) {
    res[m][m] = count;
  }
  return res;
};

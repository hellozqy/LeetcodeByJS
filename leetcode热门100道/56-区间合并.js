/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  res = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      res[i - 1] = [res[i - 1][0], Math.max(res[i - 1][1], res[i][1])];
      res.splice(i, 1);
      i--;
    }
  }
  return res;
};

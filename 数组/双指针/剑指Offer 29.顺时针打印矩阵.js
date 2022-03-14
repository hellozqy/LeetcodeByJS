/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) {
    return [];
  }
  let res = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i]);
    for (let i = top; i < bottom; i++) res.push(matrix[i][right]);
    for (let i = right; i > left; i--) res.push(matrix[bottom][i]);
    for (let i = bottom; i > top; i--) res.push(matrix[i][left]);
    left++;
    top++;
    right--;
    bottom--;
  }
  if (top === bottom) {
    for (let i = left; i <= right; i++) res.push(matrix[top][i]);
  } else if (left === right) {
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
  }
  return res;
};

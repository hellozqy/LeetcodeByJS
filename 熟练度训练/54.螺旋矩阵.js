/*
 * @lc app=leetcode.cn id=54 lang=javascript
 * @lcpr version=30102
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode.cn/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (49.76%)
 * Likes:    1515
 * Dislikes: 0
 * Total Accepted:    419.2K
 * Total Submissions: 842.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2：
 * 
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 * 
 * 
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = [];
  let top = 0
  let left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) res.push(matrix[top][i])
    for (let i = top; i < bottom; i++) res.push(matrix[i][right])
    for (let i = right; i > left; i--) res.push(matrix[bottom][i])
    for (let i = bottom; i > top; i--) res.push(matrix[i][left])
    left++
    top++
    right--
    bottom--
  }
  if (top === bottom) {
    for (let i = left; i <= right; i++)  res.push(matrix[top][i])
  } else if (left === right) {
    for (let i = top; i <= bottom; i++)res.push(matrix[i][right])
  }
  return res;
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[4,5,6],[7,8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]\n
// @lcpr case=end

 */


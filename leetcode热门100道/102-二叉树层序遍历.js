/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  let res = [[root]];
  let level = 0;
  while (res[level].length) {
    let len = res[level].length;
    res[level + 1] = [];
    for (let i = 0; i < len; i++) {
      if (res[level][i] && res[level][i].left) {
        res[level + 1].push(res[level][i].left);
      }
      if (res[level][i] && res[level][i].right) {
        res[level + 1].push(res[level][i].right);
      }
      res[level][i] = res[level][i] && res[level][i].val;
    }
    level += 1;
  }
  res.pop();
  return res;
};

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = [];
  const fn = node => {
    if (!node) {
      return;
    }
    res.push(node.val);
    for (const i of node.children) {
      fn(i);
    }
  };
  fn(root);
  return res;
};

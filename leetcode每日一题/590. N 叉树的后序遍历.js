/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  const fn = n => {
    if (!n) {
      return;
    }
    for (const i of n.children) {
      fn(i);
    }
    res.push(n.val);
  };
  fn(root);
  return res;
};

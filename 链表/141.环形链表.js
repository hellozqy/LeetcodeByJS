/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let l = head.next;
  let r = head.next.next;
  while (r && r.next) {
    if (l === r) {
      return true;
    }
    l = l.next;
    r = r.next.next;
  }
  return false;
};

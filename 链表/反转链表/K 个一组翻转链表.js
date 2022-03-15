/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let pre = null;
  let cur = head;
  let p = head;
  for (let i = 0; i < k; i++) {
    if (!p) return head;
    p = p.next;
  }
  for (let i = 0; i < k; i++) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  head.next = reverseKGroup(cur, k);
  return pre;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = null;
  let node = null;
  let carry = 0;
  while (l1 || l2) {
    let n1 = (l1 && l1.val) || 0;
    let n2 = (l2 && l2.val) || 0;
    let sum = n1 + n2 + carry;
    carry = Math.floor(sum / 10);
    if (!head) {
      head = new ListNode(sum % 10);
      node = head;
    } else {
      node.next = new ListNode(sum % 10);
      node = node.next;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) node.next = new ListNode(1);
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let node = new ListNode(0, head);
  let l = node;
  let r = node;
  while (n--) {
    r = r.next;
  }
  while (r.next) {
    l = l.next;
    r = r.next;
  }
  l.next = l.next.next;
  return node.next;
};

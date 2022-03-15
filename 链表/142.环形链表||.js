/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let l = head.next;
  let r = head.next.next;
  while (r && r.next) {
    if (l === r) {
      r = head;
      while (l !== r) {
        l = l.next;
        r = r.next;
      }
			return l;
    } else {
      l = l.next;
      r = r.next.next;
    }
  }
  return null;
};

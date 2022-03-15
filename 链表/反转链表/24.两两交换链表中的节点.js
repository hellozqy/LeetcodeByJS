/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
// 	const res = new ListNode(-1)
// 	res.next = head
// 	let cur = res
// 	while (cur.next && cur.next.next) {
// 		let p1 = cur.next
// 		let p2 = cur.next.next
// 		cur.next = p2
// 		p1.next = p2.next
// 		p2.next = p1
// 		cur = p1
// 	}
// 	return res.next
// };

var swapPairs = function (head) {
	if (!head || !head.next) {
		return head
	}
	let newHead = head.next
	head.next = swapPairs(head.next.next)
	newHead.next = head
	return newHead
}

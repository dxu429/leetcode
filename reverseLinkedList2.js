/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if(!head) return null
  if(m===n) return head
  let dummy = new ListNode(0)
  dummy.next = head
  let left = dummy
  for(let i = 0; i < m - 1; ++i)
      left = left.next

  let curr = left.next
  let prev = null

  for(let i = 0; i <= n-m; ++i) {
      [curr.next, prev, curr] = [prev, curr, curr.next]
  }
  left.next.next = curr
  left.next = prev
  
  return dummy.next
};
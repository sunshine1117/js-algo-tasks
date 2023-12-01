/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;

  while(l1!==null || l2!==null || carry !== 0) {
      let x = (l1?.val || 0);
      let y = (l2?.val || 0);
      let sum = x + y + carry;

      carry = Math.floor(sum/10);
      const result = sum%10 ;
      cur.next = new ListNode(result);
      cur = cur.next;
      if(l1 !== null) l1 = l1.next;
      if(l2 !== null) l2 = l2?.next;
  }

  return dummy.next;
};

console.log(addTwoNumbers([1, 2, 3], [4, 5, 6]));// [5, 7, 9]

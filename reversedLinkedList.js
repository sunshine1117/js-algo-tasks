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
var reverseList = function(head) {
  let prev = null;
    let current = head;
     while (current !== null) {
        let nextNode = current.next;
        current.next = prev;          // Reverse the link
        prev = current;               // Move one step forward in the list
        current = nextNode;           // Move to the next node
    }
    return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]))

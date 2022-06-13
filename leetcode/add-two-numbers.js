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
 var addTwoNumbers = function(l1, l2) {
    const l1Arr = [];
    const l2Arr = [];
   
    let node = l1;
    l1Arr.push(node.val);
    while (node.next !== null) {
        node = node.next;
        l1Arr.push(node.val);
    }
    
    node = l2;
    l2Arr.push(node.val);
    while (node.next !== null) {
        node = node.next;
        l2Arr.push(node.val);
    }
    
    const resultArr = (BigInt(l1Arr.reverse().join('')) + BigInt(l2Arr.reverse().join('')))
        .toString()
        .split('');
    
    node = new ListNode(resultArr[0]);
    for (let i = 1; i < resultArr.length; i += 1) {
        const temp = new ListNode(resultArr[i], node);
        node = temp;
    }
    
    return node;
};
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummyHead: ListNode = new ListNode(0);

    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;
    let curResultNode: ListNode | null = dummyHead;
    let carry = 0;

    while (p1 !== null || p2 !== null) {
        const x = p1 ? p1.val : 0;
        const y = p2 ? p2.val : 0;
        const result = x + y + carry;
        const resultDigit = result % 10;
        carry = result >= 10 ? 1 : 0;
        curResultNode.next = new ListNode(resultDigit);
        curResultNode = curResultNode.next;
        if (p1) p1 = p1.next;
        if (p2) p2 = p2.next;
    }
    if (carry > 0) {
        curResultNode.next = new ListNode(carry);
    }

    return dummyHead.next;
};


const node2_1 = new ListNode(2);
const node4_1 = new ListNode(4);
const node3_1 = new ListNode(3);
node2_1.next = node4_1;
node4_1.next = node3_1;

const node5_2 = new ListNode(5);
const node6_2 = new ListNode(6);
const node4_2 = new ListNode(4);
node5_2.next = node6_2;
node6_2.next = node4_2;

const result = addTwoNumbers(node2_1, node5_2);
console.log("result");


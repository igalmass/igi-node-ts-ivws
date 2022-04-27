export class MyListNode {
    public constructor(public value: number, public next: MyListNode) {
    }
}

const listCycleDetector = (root: MyListNode): boolean => {
    let fast = root,
        slow = root;

    while (fast && fast.next) {
        if (fast == slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
}
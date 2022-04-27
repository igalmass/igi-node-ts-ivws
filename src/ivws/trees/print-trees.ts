import {rootCertificates} from "tls";

class MyNode {
    public left: MyNode | null = null;
    public right: MyNode | null = null;

    public constructor(public value: string) {
    }
}


function printDepthFirstValues(root: MyNode) {
    if (!root) return [];
    const result = [];
    const stack: MyNode[] = [root];

    while (stack.length > 0) {
        const currentNode: MyNode | undefined = stack.pop();
        result.push(currentNode);

        if (currentNode) {
            console.log(currentNode.value);
            if (currentNode.left) stack.push(currentNode.left);
            if (currentNode.right) stack.push(currentNode.right);
        }
    }
    return result;
}

const getDfsRecursive = (root: MyNode | null): string[] => {
    if (root == null) return [];

    const leftValues = getDfsRecursive(root.left);
    const rightValues = getDfsRecursive(root.right);

    // @ts-ignore
    const result: string[] = [root.value, ...leftValues, ...rightValues]
    return result;
}

const printBfs = (root: MyNode | null): void => {
    if (!root) return;

    const queue = [root];

    while (queue.length > 0) {
        const curNode = queue.shift();
        if (curNode) {
            console.log(curNode.value);
            if (curNode.left) queue.push(curNode.left);
            if (curNode.right) queue.push(curNode.right);
        }
    }
}

const hasValueViaBfs = (root: MyNode | null, valueToFind: string): boolean => {
    if (!root) return false;
    const queue = [root];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        if (currentNode) {
            if (currentNode.value === valueToFind) {
                return true;
            }
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    return false;

}

const hasValueViaDfs = (root: MyNode | null, valueToFind: string): boolean => {
    if (!root) return false;

    if (root.value === valueToFind) return true;
    return hasValueViaDfs(root.left, valueToFind) || hasValueViaDfs(root.right, valueToFind);

}

const sumOfTree = (root: MyNode | null): number => {
    if (!root) return 0;
    const value = +root.value;
    return value + sumOfTree(root.left) + sumOfTree(root.right);
}

const maxPath = (root: MyNode | null): number => {
    if (root == null) return -Infinity;

    const maxLeft = maxPath(root.left);
    const maxRight = maxPath(root.right);
    let curValue = +root.value;
    if (maxLeft > maxRight) {
        return curValue + maxLeft;
    } else {
        return curValue + maxRight;
    }
}







const a = new MyNode('a');
const b = new MyNode('b');
const c = new MyNode('c');
const d = new MyNode('d');
const e = new MyNode('e');

const f = new MyNode('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;

c.right = f;

// printDepthFirstValues(a);
// console.log(printBfs(a));
console.log(hasValueViaDfs(a, 'fg'))
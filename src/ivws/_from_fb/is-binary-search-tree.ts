export class MyNode {
    constructor(public value: number, public left: MyNode | null, public right: MyNode | null) {
    }
}

const isBinarySearchTree = (root: MyNode | null, min: number, max: number) : boolean => {
    if (root === null) return true;

    if (root.value < min || root.value > max) return false;

    return isBinarySearchTree(root.left, min, root.value)
        &&
        isBinarySearchTree(root.right, root.value, max);


}





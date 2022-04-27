class MyTrieNode {
    public children: any = {};
    public isEndOfWord = false;
}

class MyTrieTree {

    private readonly rootNode: MyTrieNode;

    public constructor() {
        this.rootNode = new MyTrieNode();
    }


    public addWord(word: string): void {
        word = word.toLowerCase();
        let curNode: MyTrieNode = this.rootNode;
        if (curNode) {
            for (let i = 0; i < word.length; i++) {

                let curChar = word.charAt(i);
                let child = curNode.children[curChar];
                if (!child) {
                    child = new MyTrieNode();
                    curNode.children[curChar] = child;
                }

                curNode = curNode.children[curChar];
            }

            curNode.isEndOfWord = true;
        }

    }

    public isCompleteWord(word: string): boolean {
        let curNode2: MyTrieNode = this.rootNode;

       for (let i = 0 ; i < word.length ; i++) {
           if (!curNode2) return false;
           const curChar = word.charAt(i);
           const nextNode = curNode2.children[curChar];
           curNode2 = nextNode;
       }
       return !!curNode2 && curNode2.isEndOfWord;
    }


}


const tree = new MyTrieTree();
tree.addWord('Bob');
let root = tree.addWord('Dylan');
// console.log(root);
console.log(tree.isCompleteWord('dylan'));








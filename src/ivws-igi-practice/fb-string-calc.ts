class MyCalcNode {
    public constructor(public children: MyCalcNode[] | null) {
    }
}

enum OpType {
    PLUS,
    MULTIPLE
}

class MyOpNode extends MyCalcNode {
    public constructor(public opType: OpType, public children: MyCalcNode[] | null) {
        super(children);
    }
}

class MyValNode extends MyCalcNode {
    public constructor(public value: number, public children: MyCalcNode[] | null) {
        super(children);
    }
}

//      2 + 23 * 5 + 4 * 12 * 6 + 17
//               2
//               |
//               + ----------
//             /   \        |
//            /     \       17
//            *      *
//           / \    / \
//          23  5  4   *
//                    /  \
//                   12   6

const fbStringCalc = (source: string): number => {
    function isDigit(s: string): boolean {
        if (source.charAt(0) >= '0' && source.charAt(0) <= '9') {
            return true;
        } else {
            return false;
        }
    }

    function readNumber(curDigit: string, i: number): number[] {
        let number1 = 0;
        while (isDigit(curDigit)) {
            number1 = number1 + parseInt(curDigit);
            i = i + 1;
        }
        return [number1, i];
    }

    function readOp(source: string, i: number): OpType {
        const opChar = source.charAt(i);
        if (opChar === '+') {
            return OpType.PLUS;
        } else if (opChar === '*') {
            return OpType.MULTIPLE;
        } else {
            throw `Invalid operation ${opChar}`
        }
    }

    const buildTree55 = (source: string): MyCalcNode => {
        for (let i = 0 ; i < source.length ; i++) {
            //  read number
            let leftNumber = 0;
            [leftNumber, i]  = readNumber(source, i);
            const opType = readOp(source, i);

        }

        return new MyCalcNode(null);
    }

    let index = 0;




    return 0;
}
function isValidParenthesis(s: string): boolean {
    let stack: string[] = [];

    const parentheses = ['[]', '{}', '()'];

    function isOpen(sElement: string) {
        return parentheses.map((cur: string) => cur[0]).join().indexOf(sElement) !== -1;
    }


    for (let i = 0 ; i < s.length ; i++) {
        const curChar = s[i];
        if (isOpen(curChar)) {
            stack.push(curChar);
        } else {
            const expectedClose = parentheses.find((cur: string) => cur.indexOf(curChar) !== -1);
            if (expectedClose) {
                const popped = stack.pop();
                if (expectedClose && expectedClose[0] !== popped) {
                    return false;
                }
            }
        }
    }

    return stack.length === 0;

};

export default isValidParenthesis;
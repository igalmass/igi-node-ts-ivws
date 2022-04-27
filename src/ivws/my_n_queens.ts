const my_n_queens = (n: number): string[][] => {
    const board: string[][] = Array(n).fill(0).map(_ => Array(n).fill('.'));
    const colsUsed = new Set();
    const posDiagUsed = new Set(); // r + c
    const negDiagUsed = new Set(); // r - c

    let result: string[][] = [];


    const cloneToString = (board: string[][]): string[] => {
        return board.map((cur: string[]) => cur.join(","));
    }

    const backtrack = (r: number): void => {
        if (r === n) {
            result.push(cloneToString(board));
            return;
        }

        for (let c = 0 ; c < n ; c++) {
            let isColsUsed = colsUsed.has(c);
            let isPosDiagUsed = posDiagUsed.has(r + c);
            let isNegDiagUsed = negDiagUsed.has(r - c);
            if (isColsUsed || isPosDiagUsed || isNegDiagUsed) {
                continue;
            }

            colsUsed.add(c);
            posDiagUsed.add(r + c);
            negDiagUsed.add(r - c);
            board[r][c] = "Q";
            backtrack(r + 1);

            colsUsed.delete(c);

            posDiagUsed.delete(r + c)
            negDiagUsed.delete(r - c)
            board[r][c] = ".";
        }
    }

    backtrack(0);

    return result;
}

console.log(my_n_queens(4));

const canMoveTo = (row: number, col: number, size: number, result: number[][]): boolean => {
    return row < 0 || col < 0 || col > size || row > size || result[row][col] != 0;
}


const spiralMatrixByNumber = (size: number): number[][] => {

    let result: number[][] = new Array(size);
    result.map(() => new Array(size));
    for (let i = 0 ; i < size ; i++) {
        for (let j = 0 ; j < size ; j++) {
            result[i][j] = 0;
        }
    }

    const deltaForRows = [0, 1, 0, -1];
    const deltaForCols = [1, 0, -1, 0];
    let row = 0;
    let col = 0;
    let direction = 0;

    for (let val = 1 ; val <= size * size; val++) {
        result[row][col] = val;

        row = row + deltaForRows[direction];
        col = col + deltaForCols[direction];

        if (!canMoveTo(row, col, size, result)) {
            row = row - deltaForRows[direction];
            col = col - deltaForCols[direction];
            direction = (direction + 1) % 4;
            row = row + deltaForRows[direction];
            col = col + deltaForCols[direction];
        }
    }

    return result;
}

console.log(spiralMatrixByNumber(4));
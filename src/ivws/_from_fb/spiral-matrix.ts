const printSpiral = (matrices: number[][]): number[] => {
    const result: number[] = [];

    const printSpiralInternal = (matrices: number[][]): void => {

        let top = 0,
            left = 0,
            right = matrices[0].length - 1,
            bottom = matrices.length - 1;

        while (right >= left && top <= bottom) {
            // printTopLeftToTopRight();
            for (let i = 0; i <= right; i++) {
                result.push(matrices[top][i]);
            }
            // printTopLeftToBottomRight();
            for (let i = top + 1; i <= bottom; i++) {
                result.push(matrices[i][right]);
            }

            // printBottomRightToBottomLeft();
            for (let i = right - 1; i >= 0; i--) {
                result.push(matrices[bottom][i]);
            }

            // printBottomLeftToTopLeft();
            for (let i = bottom - 1; i > top; i--) {
                result.push(matrices[i][left]);
            }

            // updateIndexes();
            top = top + 1;
            left = left + 1;
            right = right - 1;
            bottom = bottom - 1;

        }

    }

    printSpiralInternal(matrices);
    return result;


}

const matrices1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const matrices3 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

const matrices2 = [
    [1]
];

console.log('orig: ');
console.log(matrices3);
console.log(printSpiral(matrices3));
const fewestCoinsToSum = (coins: number[], expectedSum: number): number[][] => {
    const result: number[][] = [];
    let resultMinPathLength = -1;

    const getAllPossibleArrays = (coins: number[], sum: number, coinsSoFar: number[]): void => {
        for (let i = 0 ; i < coins.length ; i++) {
            const remain = sum - coins[i];

            if (remain > 0) {
                getAllPossibleArrays(coins, remain, [coins[i], ...coinsSoFar]);
            } else if (remain == 0) {
                //  add to result
                result.push([coins[i], ...coinsSoFar]);
            } else { // remain < 0
                return;
            }
        }
    }

    const calcMinPathLength = (coins: number[], expectedSum: number, countSoFar: number): void => {
        for (let i = 0 ; i < coins.length ; i++) {
            const remainder = expectedSum - coins[i];
            if (remainder > 0) {
                calcMinPathLength(coins, remainder, countSoFar + 1);
            } else if (remainder == 0) {
                if (resultMinPathLength === -1) {
                    resultMinPathLength = countSoFar + 1;
                } else {
                    resultMinPathLength = Math.min(resultMinPathLength, countSoFar + 1);
                }
            } else { // remainder < 0
                return;
            }
        }
    }

    getAllPossibleArrays(coins, expectedSum, []);
    calcMinPathLength(coins, expectedSum, 0);
    console.log(resultMinPathLength);
    return result;
}

console.log(fewestCoinsToSum([1, 3, 4, 5], 7));
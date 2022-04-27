const coinsToSum = (coins: number[], expectedSum: number): number[][] => {
    const result: number[][] = [];

    const getPossibleArrays = (allCoins: number[], expectedSubSum: number, coinsSoFar: number[]): void => {
        for (let i = 0; i < allCoins.length; i++) {
            const curCoin = allCoins[i]
            const remainder = expectedSubSum - curCoin;
            if (remainder == 0) {
                result.push([curCoin, ...coinsSoFar]);
            } else
            if (remainder < 0) {
                return;
            } else { // remainder > 0
                getPossibleArrays(coins, remainder, [...coinsSoFar, curCoin]);
            }
        }
    }

    getPossibleArrays(coins, expectedSum, []);

    return result;
}

console.log(coinsToSum([1, 3, 5, 4, 8, 2], 12));



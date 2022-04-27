const bestSum = (targetSum: number, numbers: number[], memo = {}): number[] | null => {
    if (targetSum in memo) { // @ts-ignore
        return memo[targetSum];
    }
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;


    let shortestCombination: number[] | null = null;
    for (let num of numbers) {
        // @ts-ignore
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    // @ts-ignore
    memo[targetSum] = shortestCombination;

    // @ts-ignore
    return memo[targetSum];

}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
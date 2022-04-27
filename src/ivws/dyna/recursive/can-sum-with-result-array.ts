const canSumWithResultArray = (target: number, numbers: number[], memo={}): number[] | null => {
    if (target in memo) { // @ts-ignore
        return memo[target];
    }
    if (target == 0) return [];
    if (target < 0) return null;

    for (let num of numbers) {
        const remainder = target - num;
        const curResult = canSumWithResultArray(remainder, numbers, memo);
        if (curResult !== null) {
            // @ts-ignore
            memo[target] = [num, ...curResult];
            // @ts-ignore
            return memo[target];
        }
    }

    // @ts-ignore
    memo[target] = null;
    return null;
}


console.log(canSumWithResultArray(30, [2, 3]));
console.log(canSumWithResultArray(300, [7, 14]));
const canSum = (target: number, numbers: number[], memo = {}): boolean => {
    if (target in memo) { // @ts-ignore
        return memo[target];
    }
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers) {
        const remainder = target - num;
        if (canSum(remainder, numbers)) {
            // @ts-ignore
            memo[target] = true;
            return true;
        }
    }

    // @ts-ignore
    memo[target] = false;
    return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
const gridTraveller = (m: number, n: number, memo = {}): number => {
    const key = m + "," + n;

    if (key in memo) { // @ts-ignore
        return memo[n];
    }
    if (m == 1 && n == 1) return 1;
    if (m == 0 || n == 0) return 0;
    // @ts-ignore
    memo[key] = gridTraveller(m - 1, n) + gridTraveller(m, n - 1);
    // @ts-ignore
    return memo[key];
}

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
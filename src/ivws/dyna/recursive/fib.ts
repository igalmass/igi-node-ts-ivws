

const fib = (n: any, memo = {}): number => {
    if (n in memo) { // @ts-ignore
        return memo[n];
    }
    if (n < 0) throw `Invalid arg ${n}`;
    if (n == 0) return 0;
    if (n <= 2) return 1;

    // @ts-ignore
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    // @ts-ignore
    return memo[n];

}


console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(50));

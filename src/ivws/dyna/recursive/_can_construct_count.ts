const _can_construct_count = (target: string, wordBank: string[], memo = {}): number => {
    if (target in memo) { // @ts-ignore
        return memo[target];
    }
    if (target === '') return 1;

    let resultTotalCount = 0;
    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const prefix = target.slice(word.length);
            resultTotalCount = resultTotalCount + _can_construct_count(prefix, wordBank, memo);
        }
    }

    // @ts-ignore
    memo[target] = resultTotalCount;
    return resultTotalCount;
}


console.log(_can_construct_count('purple', ['purp', 'p' , 'ur', 'le', 'purpl']));
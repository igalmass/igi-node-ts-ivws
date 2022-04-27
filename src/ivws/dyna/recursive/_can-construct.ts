const _canConstruct = (target: string, wordBank: string[], memo = {}): boolean => {
    if (target in memo) { // @ts-ignore
        return memo[target];
    }
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.startsWith(word)){
            const suffix = target.slice(word.length);
            if (_canConstruct(suffix, wordBank)) {
                // @ts-ignore
                memo[target] = true;
                return true;
            }
        }
    }

    // @ts-ignore
    memo[target] = false;
    return false;
}

console.log(_canConstruct('abcdef', ['ab', 'cd', 'ef'], {}));
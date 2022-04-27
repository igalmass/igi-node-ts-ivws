const _can_construct_result_all_paths = (target: string, wordBank: string[], memo = {}): string[][] => {
    if (target in memo) { // @ts-ignore
        return memo[target];
    }
    if (target === '') return [[]];


    const result: string[][] = [];
    for (const word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length);
            const suffixResult = _can_construct_result_all_paths(suffix, wordBank, memo);
            let mapped = suffixResult.map((cur: string[]) => [word, ...cur]);
            result.push(...mapped);
        }
    }

    // @ts-ignore
    memo[target] = result;
    return result;
}

console.log(_can_construct_result_all_paths('catmouse', ['tmouse' , 'cat', 'dog', 'mouse', 'ca' ]));
console.log(_can_construct_result_all_paths('booboo', ['boon', 'bam' ]));




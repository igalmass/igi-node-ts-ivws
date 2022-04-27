const longestCommonSubsequence_Recursive = (s1: string, s2: string): number => {
    if (s1.length === 0 || s2.length === 0) return 0;

    if (s1.charAt(0) === s2.charAt(0)) {
        return 1 + longestCommonSubsequence_Recursive(s1.substring(1), s2.substring(1));
    } else {
        const lcs1: number = longestCommonSubsequence_Recursive(s1.substring(1), s2);
        const lcs2: number = longestCommonSubsequence_Recursive(s1, s2.substring(1))
        return Math.max(lcs2, lcs1);
    }
}

const lcs_iterative_from_neetCode = (s1: string, s2: string): number => {
    if (s1.length === 0 || s2.length === 0) return 0;

    const result = new Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0)) // +1 for padding
    result.map(() => new Array(s2.length + 1));
    for (let i = 0; i < result.length ; i++){
        for (let j = 0; j < result[0].length ; j++) {
            result[i][j] = 0;
        }
    }

    for (let i1 = s1.length - 1; i1 >= 0; i1--) {
        for (let i2 = s2.length - 1; i2 >=0 ; i2--) {
            if (s1.charAt(i1) === s2.charAt(i2)) {
                result[i1][i2] = 1 + result[i1 + 1][i2 + 1];
            } else {
                result[i1][i2] = Math.max(result[i1 + 1][i2], result[i1][i2 + 1])
            }
        }
    }

    return result[0][0];
}


console.log(lcs_iterative_from_neetCode('ace', 'abcde'));
function canExpand(s: string, l: number, r: number) {
    return l >= 0 && r < s.length && s[l] == s[r];
}

function longestPalindrome(s: string): string {
    if (s.length == 0) return '';
    let maxResult = 0;
    // let maxResultString = '';
    let maxIndex = -1;


    for (let i = 0 ; i < s.length ; i++) {

        //  check the odd
        let oddResult = 1;
        let l = i - 1, r = i + 1;
        while (canExpand(s, l, r)) {
            oddResult = oddResult + 2;
            r = r + 1;
            l = l - 1;
        }

        // check the even
        let evenResult = 0;

        if (i + 1 < s.length && s[i + 1] == s[i]) {
            evenResult = 2;
            l = i - 1, r = i + 2;
            while (canExpand(s, l, r)) {
                evenResult = evenResult + 2;
                l = l - 1;
                r = r + 1;
            }
        }

        let curResult = Math.max(oddResult, evenResult);
        if (maxResult < curResult) {
            maxIndex = i - curResult / 2 + 1;
            maxResult = curResult;

        }
    }

    const maxResultString = s.slice(maxIndex, maxIndex + maxResult);
    return maxResultString;

};


export default longestPalindrome;
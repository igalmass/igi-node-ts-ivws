const leet3LongestSubWithoutRepeating = (s: string) : number => {

    function lengthOfLongestSubstring(s: string): number {
        let result = 0;

        let alreadyAppeared = new Set();
        for (let i = 0 ; i < s.length ; i++) {

            alreadyAppeared.add(s[i]);
            let p = i + 1;
            while (p < s.length && !alreadyAppeared.has(s[p])) {
                alreadyAppeared.add(s[p]);
                p = p + 1;
            }
            result = Math.max(result, p - i);
            alreadyAppeared.clear();
        }


        return result;
    };

    return lengthOfLongestSubstring(s);


}

console.log(leet3LongestSubWithoutRepeating("ababcbbbab"));
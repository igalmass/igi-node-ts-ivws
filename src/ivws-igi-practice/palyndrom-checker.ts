const palindromeService = (source: string): boolean => {
    if (source.length >= 0 && source.length <= 1) return true;

    for (let l = 0 , r = source.length - 1; l <= r; l++, r--) {
        if (source.charAt(l) !== source.charAt(r)) {
            return false;
        }
    }

    return true;
}

console.log(palindromeService("abdedba"));
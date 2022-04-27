const printNextLookAndSayNumbers = (n: number): void => {

    const nextNumber = (s: string): string => {
        let result = [];
        let i = 0;
        while (i < s.length) {
            let count = 1;
            while (i + 1 < s.length && s.charAt(i) == s.charAt(i + 1)) {
                count = count + 1;
                i = i + 1;
            }
            result.push('' + count + s.charAt(i));
            i = i + 1;
        }
        return result.join('');
    }

    let cur = "1";
    console.log(cur);
    for (let i = 0 ; i < n; i++) {
        cur = nextNumber(cur);
        console.log(cur);
    }
}

printNextLookAndSayNumbers(11);
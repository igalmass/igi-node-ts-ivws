const commonPrefix = (words: string[]): string => {
    if (words.length === 0) return "";

    let resultPrefix = words[0];

    for (let i = 1; i < words.length; i++) {
        const curWord = words[i];

        while (curWord.indexOf(resultPrefix) !== 0) {
            resultPrefix = resultPrefix.substring(0, resultPrefix.length - 1);
            if (resultPrefix.length == 0) return "";
        }
    }

    return resultPrefix;
}

console.log(commonPrefix(["din", "dinda", "di"]));
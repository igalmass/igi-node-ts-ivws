

const longestIncreasingList = (numbers: number[]): number => {

    const getPossibleNextLengths = (i: number, numbers: number[]): number[] => {
        const possibleNexts: number[] = [];
        for (let j = i + 1; j < numbers.length; j++) {
            if (j < numbers.length) {
                if (numbers[j] > numbers[i]) {
                    possibleNexts.push(lis[j]);
                }
            }
        }
        return possibleNexts;
    }

    const calcLis = (numbers: number[]): number => {
        for (let i = numbers.length - 1; i >= 0; i--) {
            let possibleNexts = getPossibleNextLengths(i, numbers);
            const maxFromNexts = Math.max(0, ... possibleNexts);
            lis[i] = Math.max(1, 1 + maxFromNexts);
        }

        const result = Math.max(0, ...lis);

        return result;
    }

    const lis: number[] = new Array(numbers.length);
    return calcLis(numbers);
}

console.log(longestIncreasingList([1,2,4,3]));
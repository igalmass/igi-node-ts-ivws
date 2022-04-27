const getAllPossibleSums_Brute = (nums: number[], expectedSum: number): number[][] => {
    let result: number[][] = [];


    const isMatching = (currentList: number[], expectedSum: number): boolean => {
        const totalSumOfArray = currentList.reduce((cur: number, prev: number) => cur + prev);
        return expectedSum === totalSumOfArray;
    }

    const walk = (from: number, till: number, nums: number[]) => {
        if (from === nums.length) return 0;

        if (from <= till) {
            // process current list
            const currentList = nums.slice(from, till + 1);
            if (isMatching(currentList, expectedSum)) {
                result.push(currentList);
            }
            walk(from + 1, till, nums);
        } else {
            walk (0, till + 1, nums);
        }
    }

    walk(0, 0, nums);
    return result;
}


console.log(getAllPossibleSums_Brute([1, 2, 2, 3, 4, 5], 4));
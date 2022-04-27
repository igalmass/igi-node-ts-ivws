const allPermutations = (nums: number[]): number[][] => {


    const permArr: any = [],
            usedChars: any = [];


    const permute = (nums: number[], recursionLevel: number): void => {
        // let ch = 0;
        console.log(`entering permute with nums = [${nums}], usedChars = [${usedChars}], level = ${recursionLevel}`);
        if (nums.length === 0) { console.log('num is empty so returning ....'); return;}

        for (let i = 0 ; i < nums.length; i++) {
            console.log(`begin of i = ${i}, level = ${recursionLevel}`);
            const ch: number = nums.splice(i, 1)[0];
            console.log(`taking '${ch}'`);
            usedChars.push(ch);
            console.log(`usedChars = ${usedChars}`)
            if (nums.length == 0) {
                const slice = usedChars.slice();
                console.log(`adding ${slice} to the result!, level = ${recursionLevel}`);
                permArr.push(slice);
            }
            permute(nums, recursionLevel + 1);
            nums.splice(i, 0, ch);
            const popped = usedChars.pop();
            console.log(`popped & dropped ${popped} from usedChars (now => ${usedChars})`);
            console.log(`end of i = ${i}, level = ${recursionLevel}`);
        }

        // return permArr;
    }

    // const permuteS = (s: string): void => {
    //     const results: string[][] = [];
    //
    //     const permuteInternal = (prefix: string, suffix: string): void => {
    //         for (let i = 0 ; i < prefix.length ; i++) {
    //             const newPrefix = prefix.substring(i, 1);
    //             const newSuffix = prefix.substring(i + 1, )
    //
    //             // console.log(prefix);
    //         }
    //     }
    //
    //     // permuteInternal(s);
    //     console.log(results);
    // }
    //
    //
    // permuteS('ab');

    permute(nums, 0);
    return permArr;
    // return [];

    // const backtrack = (s: string) => {
    //     for (let i = 0; i < s.length; i++) {
    //         const subStringWithoutI = s.substring(0, i) + s.substring(i + 1, s.length);
    //         backtrack(subStringWithoutI);
    //     }
    // }
    //
    // backtrack(s);
}

console.log(allPermutations([1, 2, 3]));

const reverse = (nums: number[], from: number, till: number): void => {
    while (from < till) {
        const temp = nums[till];
        nums[till] = nums[from];
        nums[from] = temp;
        till = till -1;
        from = from + 1;
    }
}

const rotateArrayRight = (nums: number[], rotateCount: number): number[] => {

    rotateCount = rotateCount % nums.length;

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, rotateCount - 1);
    reverse(nums, rotateCount, nums.length - 1);

    return nums;
}

const rotLeft = (numbers: number[], d: number): number[] => {
    // Write your code here
    d = d % numbers.length;

    //  rotate left - opposite rotate right
    d = numbers.length - d;

    reverse(numbers, 0, numbers.length - 1);
    reverse(numbers, 0, d - 1);
    reverse(numbers, d, numbers.length - 1);

    return numbers;

}

console.log(rotLeft([1,2,3,4,5], 4));
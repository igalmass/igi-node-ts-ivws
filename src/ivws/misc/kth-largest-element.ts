const kthLargestElement_WithPivot = (nums: number[], k: number): number => {
    k = nums.length - k; // if k == 1 => we want the number at the end, which is nums.length - 1. If k = 2, we want nums.length - 2 etc.


    const swap = (nums: number[], i: number, j: number): void => {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    const quickSelect = (l: number, r: number): number => {
        const pivot = nums[r];
        let j = l;
        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                swap(nums, i, j);
                j = j + 1;
            }
        }
        swap(nums, j, r);

        //  now all nums[a] where a < j are =< a[j]

        if (j < k) {
            return quickSelect(l, j - 1);
        } else if (j > k) {
            return quickSelect(j + 1, r);
        } else { // j == k
            return nums[k];
        }


    }

    // console.log('before pivot');
    // console.log(nums);
    // console.log('after pivot');
    return quickSelect(0, nums.length - 1);
    //console.log(nums);

    // return k;
}

// console.log(kthLargestElement_WithPivot([5, 6, 1, 3, 4, 1, 2, 10, 20, 30, 40], 7));
console.log(kthLargestElement_WithPivot([5, 6, 1, 3, 4, 1], 3));

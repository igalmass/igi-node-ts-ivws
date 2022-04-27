const console_log2 = process.stdout.write;

const igiGetAllPossibleSublists = (numbers: number[]): number[][] => {

    const fillSubArrays = (numbers: number[], start: number, end: number): void => {
        if (start === numbers.length) return;

        if (start <= end) {
            //  add current subarray to the list
            let current = numbers.slice(start, end + 1);
            result.push(current);
            fillSubArrays(numbers, start + 1, end);
        } else { // start > end
            fillSubArrays(numbers, 0, end + 1);
        }

    }

    const result: number[][] = [];
    fillSubArrays(numbers, 0, 0);
    return result;

}


const printAllSubArrays = (numbers: number[], start: number, end: number): void => {
    if (end == numbers.length) {
        return;
    } else if (start > end) {
        printAllSubArrays(numbers, 0, end + 1);
    } else {
        process.stdout.write('[');
        for (let i = start; i < end; i++) {
            process.stdout.write(`${numbers[i]},`);
        }
        process.stdout.write(`${numbers[end]}]\n`);
        printAllSubArrays(numbers, start + 1, end);
    }
}

// printAllSubArrays([1, 2, 3], 0, 0);
console.log(igiGetAllPossibleSublists([0, 1, 2, 3]));
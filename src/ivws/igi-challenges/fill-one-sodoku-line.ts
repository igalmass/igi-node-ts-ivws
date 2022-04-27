import _ from "lodash";

type SodArrayEntry = number | null;

const fillOneSodokuLine = () => {

    const LINE_LENGTH = 9;
    let resultArray: SodArrayEntry[] = Array(LINE_LENGTH).fill(null);

    const getNonUsedNumbers = (source: SodArrayEntry[]): number[] => {
        const asSet: Set<number> = new Set();
        source.forEach((cur: SodArrayEntry) => {
            if (cur) asSet.add(cur)
        });
        const result: number[] = [];
        for (let i = 1 ; i <= LINE_LENGTH ; i++) {
            if (!asSet.has(i)) result.push(i);
        }
        return result;
    }

    const getNextPossibleNumber = (nonUsedNumbers: any[]): number => {
        const suggestedNumberIndex = _.random(0, nonUsedNumbers.length - 1);
        const suggestedNumber = nonUsedNumbers[suggestedNumberIndex];
        return suggestedNumber;
    }

    const isValidLine = (resultArray: SodArrayEntry[]): boolean => {
        const set = new Set();
        const areAllOk = resultArray.every((cur: SodArrayEntry) => {
            if (cur === null) {
                return true;
            } else {
                if (set.has(cur)) {
                    return false;
                } else {
                    set.add(cur);
                    return true;
                }
            }
        });
        return areAllOk;
    }

    const fillLine = (index: number): void => {
        // if (index === LINE_LENGTH) {
        //     console.log(`finished! result is ${resultArray}`);
        //     return;
        // }

        for (let i = index; i < LINE_LENGTH; i++) {
            const nonUsedNumbers = getNonUsedNumbers(resultArray);
            resultArray[i] = getNextPossibleNumber(nonUsedNumbers);

            while (!isValidLine(resultArray)) {
                resultArray[i] = getNextPossibleNumber(nonUsedNumbers);
            }
        }
    }

    fillLine(0);
    console.log(resultArray);


}

fillOneSodokuLine();
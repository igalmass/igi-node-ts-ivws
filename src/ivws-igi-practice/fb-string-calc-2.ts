//      2 + 23 * 5 + 4 * 12 * 6 + 17
//               2
//               |
//               + ----------
//             /   \        |
//            /     \       17
//            *      *
//           / \    / \
//          23  5  4   *
//                    /  \
//                   12   6

const fbStringCalc2 = (source: string): number => {

    const calcMultipleSection = (curSection: string): number => {
        const numbersAsString = curSection.split('*');
        let sectionResult = 1;
        numbersAsString.forEach((cur: string) => {
            sectionResult = sectionResult * +cur;
        });
        return sectionResult;
    }

    const doCalc = (source: string): number => {
        let result = 0;

        const sections: string[] = source.split('+');
        sections.forEach((curSection: string) => {
            result = result + calcMultipleSection(curSection);
        });

        return result;
    }

    return doCalc(source);
}

console.log(fbStringCalc2("1+2*4"));


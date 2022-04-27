
const printJsonAsTree = (source: any, level: number): void => {

    const getLevelPrefix = (level: number): string => {
        if (level == 0) {
            return '';
        } else {
            const leadingSpace = Array(level - 1).fill(' ').join('');
            return `${leadingSpace}-`;
        }

    }

    for (let propertyName in source) {
        const propertyValue = source[propertyName];
        process.stdout.write(`${getLevelPrefix(level)}${propertyName}`);
        if (typeof (propertyValue) === 'number' || typeof (propertyValue) === 'string') {
            process.stdout.write(` - ${propertyValue}\n`);
        } else {
            process.stdout.write(`\n${getLevelPrefix(level)}|\n`)
            printJsonAsTree(propertyValue, level + 1);
        }
    }
}


printJsonAsTree({
    a: 3,
    b: "B",
    c: {ca: "aaVal", cb: {cbaKey1: 'cabVal1', cabKey2: 'cabVal2', d: {d1: 'd1Val', d2: 'd2Val'}}}
}, 0);
export const leetReverseInteger = (source: number): number => {
    let result = 0;
    // let pop = 0;

    while(source > 0) {
        let pop = source % 10;
        source = Math.floor(source / 10);
        result = result * 10 + pop;
    }


    return result;
}

console.log(leetReverseInteger(354));
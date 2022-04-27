const boatsToSavePeople = (peopleWeights: number[], limitPerBoat: number): number[][] => {
    let l = 0; let r = peopleWeights.length - 1;

    // let result = []
    const totalResult: number[][] = [];
    peopleWeights.sort();

    while (l <= r) {
        const currentResult = [peopleWeights[r]];
        const remainingWeightOnThisBoat = limitPerBoat - peopleWeights[r];
        r = r - 1;
        // result = result + 1;
        if (l <= r && remainingWeightOnThisBoat) {
            currentResult.push(peopleWeights[l]);
            l = l + 1;
        }
        totalResult.push(currentResult);
    }

    return totalResult;
}

console.log(boatsToSavePeople([1, 4, 5, 9, 8], 10));


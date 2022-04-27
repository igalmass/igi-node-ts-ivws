class KnapsackItem {
    public constructor(public value: number, public weight: number) {
    }
}


const knapsack = (items: KnapsackItem[], maxWeight: number) => {
    const m = new Array(items.length)
        .fill(0)
        .map(() => new Array(maxWeight + 1).fill(0));

    for (let curMaxWeight = 1; curMaxWeight <= maxWeight; curMaxWeight++)
        for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
            {
                const curItem = items[itemIndex];
                let ifNotSelected = 0;
                if (itemIndex > 0) {
                    ifNotSelected = m[itemIndex - 1][curMaxWeight];
                }

                let ifSelected = 0;
                const canSelectThisItem = curItem.weight <= curMaxWeight;
                if (canSelectThisItem) {
                    const remainder = curMaxWeight - curItem.weight;
                    let remainderValue = 0;
                    if (itemIndex > 0) {
                        remainderValue = m[itemIndex - 1][remainder];
                    }
                    ifSelected = curItem.value + remainderValue;
                }

                m[itemIndex][curMaxWeight] = Math.max(ifSelected, ifNotSelected);
            }
        }


    console.log(m);


}


const items = [
    new KnapsackItem(1, 1),
    new KnapsackItem(4, 3),
    new KnapsackItem(5, 4),
    new KnapsackItem(7, 5)
];

knapsack(
    items,
    7);
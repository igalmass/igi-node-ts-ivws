import _ from "lodash";

const myConsoleTricks = () => {

    type Person = {
        firstName: string,
        lastName: string
    }


    const myArray: Person[] = [
        {firstName: 'a', lastName: 'b'},
        {firstName: 'c', lastName: 'd'}
    ]

    const myArray2 = _.range(10);

    const myArray3: number[][] = [
        [1, 2],
        [5, 6]
    ]


    console.table(myArray3);

    console.log('Outside group');
    console.group("1");
    console.log("Inside1");
    console.log("Inside2");
    console.group("2");
    console.log("Inside1");
    console.log("Inside2");
    console.groupEnd();
    console.groupEnd();
    console.log("Outside - group ended");

    console.time("Counting");
    for (let i= 0 ; i < 1000000; i++);
    console.timeEnd("Counting");

}

myConsoleTricks();

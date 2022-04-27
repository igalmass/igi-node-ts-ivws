const hasPathDfsRecursive = (graph: any, src: any, dest: any): boolean => {
    if (src === dest) return true;

    for (let neighbour of graph[src]) {
        if (hasPathDfsRecursive(graph, neighbour, dest)) return true;
    }

    return false;
}


// const hasPathDfsIterative = (graph: any, src: any, dest: any): boolean => {
//     const stack = [src];
//
//     while (stack.length > 0) {
//         const cur = stack.pop();
//
//         if (cur == dest) return true;
//     }
// }
//



const hasPathBfs = (graph: any, src: any, dest: any): boolean => {
    const queue = [src];

    while (queue.length > 0) {
        const cur = queue.pop();
        if (cur === dest) {
            return true;
        }
        for (const neighbour of graph[cur]) {
            queue.push(neighbour);
        }
    }

    return false;
}




const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(`has path = ${hasPathDfsRecursive(graph2, 'f', 'f')}`);
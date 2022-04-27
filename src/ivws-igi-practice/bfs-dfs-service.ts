const dfsIterative2 = (graph: any, rootNode: any): void => {
    const stack = [];
    const visited = new Set();
    stack.push(rootNode);

    while (stack.length > 0) {
        const cur = stack.pop();

        if (!visited.has(cur)) {
            console.log(cur);
            visited.add(cur);

            for (let neighbour of graph[cur]) {
                stack.push(neighbour);
            }
        }
    }
}


const dfsRecursive8 = (graph: any, source: any, visited: Set<any>): void => {
    if (!source || visited.has(source)) return;

    console.log(source);
    visited.add(source);

    for (let neighbour of graph[source]) {
        dfsRecursive8(graph, neighbour, visited);
    }

}


const bfsIterative8 = (graph: any, rootNode: any): void => {
    const queue: any[] = [];
    const visited = new Set();
    queue.push(rootNode);

    while (queue.length > 0) {

        const cur = queue.shift();

        if (!visited.has(cur)) {
            console.log(cur);
            visited.add(cur);

            for (let neighbour of graph[cur]) {
                queue.push(neighbour);
            }
        }
    }
}


//     a ---
//    / \  |
//   b   c |
//  /     \|
// d       e
// |
// f
const graph8 = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: ['a'],
    f: []
}

// dfsIterative2(graph8, 'a');
// bfsIterative8(graph8, 'a');
dfsRecursive8(graph8, 'a', new Set());
console.log('hello');

const dfsIterative = (graph: any, source: any) => {

    const stack = [source];

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

const dfsRecursive = (graph: any, source: any): void => {
    console.log(source);

    for (let neighbour of graph[source]) {
        dfsRecursive(graph, neighbour);
    }
}

const bfsIterative = (graph: any, source: any) => {
    const queue = [source];

    while (queue.length > 0) {
        const cur = queue.shift();
        console.log(cur);
        for (let neighbour of graph[cur]) {
            queue.push(neighbour);
        }
    }
}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// console.log('bfs iterative');
// bfsIterative(graph, 'a');
//
// console.log('dfs iterative: ')
// dfsIterative(graph, 'a');

console.log('dfs recursive: ');
dfsRecursive(graph, 'a');


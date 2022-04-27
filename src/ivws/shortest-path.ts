const shortestPath = (edges: any, nodeA: any, nodeB: any) => {
    let result = 99999;
    const graph = buildGraph2(edges);

    const queue = [[nodeA, 0]];
    const visited = new Set();

    while (queue.length > 0) {
        // @ts-ignore
        const [curNode, curNodeDistance] = queue.shift();

        if (!visited.has(curNode)) {
            visited.add(curNode);

            if (curNode == nodeB) {
                result = Math.min(result, curNodeDistance);
            }

            // @ts-ignore
            for (let neighbour of graph[curNode]) {
                // @ts-ignore
                queue.push([neighbour, curNodeDistance + 1]);
            }

        }
    }

    return result;

}


const buildGraph2 = (edges: any) => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;
        if (!(a in graph)) { // @ts-ignore
            graph[a] = [];
        }
        if (!(b in graph)) { // @ts-ignore
            graph[b] = [];
        }

        // @ts-ignore
        graph[a].push(b);
        // @ts-ignore
        graph[b].push(a);

    }

    return graph;
}

const edges2 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]

console.log(shortestPath(edges2, 'w', 'zaa'));
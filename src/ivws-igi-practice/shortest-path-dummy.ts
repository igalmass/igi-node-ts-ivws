const shortestPath3 = (edges3: string[][], node: string, dest: string): number => {
    const graph = buildGraph3(edges3);
    const visited = new Set();

    const queue = new Array([[node, 0]]);
    let result = 9999;

    while (queue.length > 1) {
        // @ts-ignore
        const [curNode, curDistance] = queue.pop();

        if (curNode == dest) {
            result = curDistance;
            break;
        } else {
            for (let neighbour of curNode) {
                queue.push([neighbour, curDistance + 1]);
            }
        }
    }

    return result;
}


const buildGraph3 = (edges: any) => {
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

//               w
//             /   \
//            x     \
//           /       \
//          y -- z -- v
//

const edges3 = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]


console.log(shortestPath3(edges3, 'w', 'z'));
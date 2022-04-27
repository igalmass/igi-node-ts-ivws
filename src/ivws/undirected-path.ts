const buildGraph = (edges: any): any => {
    const graph = {};

    for (let edge of edges) {
        const [a, b] = edge;

        if (!(a in graph)) { // @ts-ignore
            graph[a] = [];
        }

        if (!(b in graph)) {
            // @ts-ignore
            graph[b] = [];
        }

        // @ts-ignore
        graph[a].push(b);
        // @ts-ignore
        graph[b].push(a);

    }

    return graph;

}

const hasPath = (graph: any, src: any, dest: any, visited: Set<any>): boolean => {
    if (src === dest) return true;
    if (visited.has(src)) return false;
    visited.add(src);

    for (const neighbour of graph[src]) {
        if (hasPath(graph, neighbour, dest, visited)) {
            return true;
        }
    }

    return false;

}

const undirectedPath = (edges: string[][], nodeA: any, nodeB: any) => {
    const graph = buildGraph(edges);
    console.log(graph);

    console.log(hasPath(graph, nodeA, nodeB, new Set()));
}




const edges: any = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

undirectedPath(edges, 'j', 'm');
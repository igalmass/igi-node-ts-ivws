function exploreAndGetIfIsNewIsland(graph: any, current: string, visited: Set<any>) {
    if (visited.has(current)) return false;

    visited.add(current);

    for (let neighbour of graph[current]) {
        exploreAndGetIfIsNewIsland(graph, neighbour, visited);
    }

    return true;

}

const connectedComponentsCount = (graph: any) => {
    const visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (exploreAndGetIfIsNewIsland(graph, node, visited)) {
            count = count + 1;
        }
    }

    return count;
}

const graph12 = {
    "1": ["2"],
    "2": ["1"],
    "3": [],
    "4": ["6"],
    "5": ["6"],
    "6": ["4", "5", "7", "8"],
    "7": ["6"],
    "8": ["6"]
}

console.log(connectedComponentsCount(graph12));
function getRowCount(grid: any) {
    return grid.length;
}

function getColCount(grid: any) {
    return grid[0].length;
}

const minIsland = (grid: any) => {
    let result = 99999;
    const visited = new Set();
    for (let r = 0 ; r < getRowCount(grid) ; r++) {
        for (let c = 0; c < getColCount(grid) ; c++) {
            let size = exploreSize(grid, r, c, visited);
            if (size > 0) {
                result = Math.min(size, result);
            }
        }
    }
    return result;
}

function isInBound(grid: any, r: number, c: number) {
    return r >= 0 && r < getRowCount(grid) && c >= 0 && c < getColCount(grid);
}

function isWater(gridElementElement: any) {
    return gridElementElement == 'W';
}

function getKeyForSet(r: number, c: number): string {
    return `$${r},${c}`;
}


const exploreSize = (grid: any, r: number, c: number, visited: Set<any>): number => {
    if (!isInBound(grid, r, c)) return 0;

    if (isWater(grid[r][c])) return 0;

    const key = getKeyForSet(r, c);
    if (visited.has(key)) return 0;
    visited.add(key);

    let size1 = exploreSize(grid, r-1, c, visited);
    let size2 = exploreSize(grid, r+1, c, visited);
    let size3 = exploreSize(grid, r, c - 1, visited);
    let size4 = exploreSize(grid, r, c + 1, visited);

    return 1 + size1 + size2 + size3 + size4;
}

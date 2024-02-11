// Given a 2D grid where '1' represents land and '0' represents water, count the number of distinct islands. Each island is surrounded by water and adjacent land tiles are connected vertically or horizontally.


function countIslands(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    let islandCount = 0;

    function dfs(row, col) {
        // Check if out of bounds, already visited, or water
        if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col] || grid[row][col] === '0') {
            return;
        }

        visited[row][col] = true;

        // Explore adjacent land tiles (up, down, left, right)
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    // Iterate through each cell and start DFS if unvisited land
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (!visited[row][col] && grid[row][col] === '1') {
                islandCount++;
                dfs(row, col);
            }
        }
    }

    return islandCount;
}

// Example usage:
const grid = [
    ["1", "1", "0", "0", "0"],
    ["0", "1", "0", "0", "1"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
const numberOfIslands = countIslands(grid);
console.log("Number of islands:", numberOfIslands); // Output: 4

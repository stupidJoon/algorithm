const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function dfs(map, row, col, isVisited, w, h) {
    isVisited[row][col] = true;
    const available = 
    [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
        .map(([r, c]) => [row + r, col + c])
        .filter(([r, c]) => (r >= 0 && r < h) && (c >= 0 && c < w))
        .filter(([r, c]) => !isVisited[r][c])
        .filter(([r, c]) => map[r][c] === 1)
        .forEach(([r, c]) => {
            dfs(map, r, c, isVisited, w, h);
        });
}

for (let i = 0; i < input.length - 1;) {
    const [w, h] = input[i].split(' ').map(Number);
    const map = input.slice(i + 1, i + h + 1).map((v) => v.split(' ').map(Number));
    i += h + 1;

    const isVisited = map.map((v) => v.map(() => false));
    let count = 0;
    for (let j = 0; j < map.length; j += 1) {
        for (let k = 0; k < map[0].length; k += 1) {
            if (map[j][k] && !isVisited[j][k]) {
                dfs(map, j, k, isVisited, w, h);
                count += 1;
            }
        }
    }
    console.log(count);
}
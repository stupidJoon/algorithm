const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((v) => v.split(' ').map(Number));

const virus = map.flatMap((value, index) => value.flatMap((v, i) => (v === 2) ? [[index, i]] : []));

function printMap(m = map) {
    console.log(m.map((v) => v.join(' ')).join('\n'));
    console.log('\n');
}

function bfs() {
    const queue = [...virus];
    const m = map.map((v) => [...v]);
    while (queue.length > 0) {
        const [row, col] = queue.shift();
        const available = [[-1, 0], [0, -1], [1, 0], [0, 1]]
            .map(([r, c]) => [row + r, col + c])
            .filter(([r, c]) => (r >= 0 && r < N) && (c >= 0 && c < M))
            .filter(([r, c]) => m[r][c] === 0)
            .forEach(([r, c]) => {
                queue.push([r, c]);
                m[r][c] = 2;
            });
    }
    return m.flatMap((val) => val.filter((v) => v === 0)).length;
}

const result = [];

for (let i = 0; i < N * M; i += 1) {
    const [w1y, w1x] = [Math.floor(i / M), i % M];
    if (map[w1y][w1x] !== 0) continue;
    for (let j = i + 1; j < N * M; j += 1) {
        const [w2y, w2x] = [Math.floor(j / M), j % M];
        if (map[w2y][w2x] !== 0) continue;
        for (let k = j + 1; k < N * M; k += 1) {
            const [w3y, w3x] = [Math.floor(k / M), k % M];
            if (map[w3y][w3x] !== 0) continue;
            map[w1y][w1x] = 1;
            map[w2y][w2x] = 1;
            map[w3y][w3x] = 1;
            // Created Random 3 Walls Map
            result.push(bfs());
            map[w1y][w1x] = 0;
            map[w2y][w2x] = 0;
            map[w3y][w3x] = 0;
        }
    }
}

console.log(Math.max(...result));
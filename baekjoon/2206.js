const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((value) => value.split('').map(Number));
let isReached = false;

// [row index, col index, distance, isBroken]
let queue = [[0, 0, 1, false]];

while (queue.length > 0) {
    const [i, j, distance, isBroken] = queue.shift();

    if (i === N - 1 && j === M - 1) {
        isReached = true;
        console.log(distance);
        break;
    }

    // left, forward, right, backward
    const availablePos = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    .filter(([vi, vj]) => map[i + vi]?.[j + vj] !== undefined)
    .filter(([vi, vj]) => map[i + vi][j + vj] === 0)
    .map(([vi, vj]) => [i + vi, j + vj, distance + 1, isBroken]);

    const availablePosWithBreak = [[0, -1], [-1, 0], [0, 1], [1, 0]]
    .filter(([vi, vj]) => map[i + vi]?.[j + vj] !== undefined)
    .filter(([vi, vj]) => map[i + vi][j + vj] === 1)
    .map(([vi, vj]) => [i + vi, j + vj, distance + 1, true]);

    queue = [...queue, ...availablePos];
    availablePos.forEach(([ni, nj]) => {
        map[ni][nj] = 2;
    });
    if (!isBroken) {
        queue = [...queue, ...availablePosWithBreak];
        availablePosWithBreak.forEach(([ni, nj]) => {
            map[ni][nj] = 2;
        });
    }
}

if (!isReached) {
    console.log(-1);
}
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map((row) => row.split('').map(Number));
const costs = Array.from({ length: N }, () => Array.from({ length: M }, () => 1));

const queue = [[0, 0]];

while (!(queue[0][0] === N - 1 && queue[0][1] === M - 1)) {
  const [y, x] = queue.shift();
  const cost = costs[y][x];

  [[0, -1], [-1, 0], [0, 1], [1, 0]]
    .map(([vy, vx]) => [y + vy, x + vx])
    .filter(([vy, vx]) => (vy >= 0 && vy < N) && (vx >= 0 && vx < M))
    .filter(([vy, vx]) => arr[vy][vx] === 1)
    .filter(([vy, vx]) => costs[vy][vx] === 1)
    .forEach(([vy, vx]) => {
      costs[vy][vx] = cost + 1;
      queue.push([vy, vx]);
    });
}

console.log(costs[N - 1][M - 1]);

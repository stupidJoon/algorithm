const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split(' ').map(Number));

let sharkSize = 2;
let sharkSizeStep = 0;
for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (arr[i][j] === 9) {
      sharkPos = [i, j];
      arr[i][j] = 0;
    }
  }
}

let cost = 0;

while (true) {
  const result = bfs();
  if (!result) break;
  cost += result;
}

console.log(cost);

function bfs() {
  const queue = [sharkPos];
  const costs = arr.map(row => row.map(() => -1));
  const eatables = [];
  let beforeCost = 0;

  costs[sharkPos[0]][sharkPos[1]] = 0;

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const cost = costs[i][j];

    if (cost > beforeCost && eatables.length > 0) {
      eatables.sort((a, b) => {
        const [si, sj] = sharkPos;
        const [ai, aj] = a;
        const [bi, bj] = b;

        if ((ai - si) - (bi - si) === 0) {
          return (aj - sj) - (bj - sj);
        }
        return (ai - si) - (bi - si);
      });

      const [ei, ej] = eatables[0];
      sharkPos = [ei, ej];

      sharkSizeStep += 1;
      if (sharkSizeStep === sharkSize) {
        sharkSize += 1;
        sharkSizeStep = 0;
      }

      arr[ei][ej] = 0;

      return costs[ei][ej];
    }

    beforeCost = cost;

    const availables = [[-1, 0], [0, -1], [0, 1], [1, 0]]
      .map(([vi, vj]) => [i + vi, j + vj])
      .filter(([vi, vj]) => (vi >= 0 && vi < N) && (vj >= 0 && vj < N))
      .filter(([vi, vj]) => costs[vi][vj] === -1)
      .filter(([vi, vj]) => arr[vi][vj] <= sharkSize)
    availables
      .forEach(([vi, vj]) => {
        costs[vi][vj] = cost + 1;
        queue.push([vi, vj]);
      });

    const eatable = availables
      .filter(([vi, vj]) => arr[vi][vj] > 0 && arr[vi][vj] < sharkSize);
    eatables.push(...eatable);
  }

  return false;
}

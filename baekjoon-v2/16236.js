const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split(' ').map(Number));

// const N = 4;
// const arr = [
//   [4, 3, 2, 1],
//   [0, 0, 0, 0],
//   [0, 0, 9, 0],
//   [1, 2, 3, 4],
// ];



let sharkPos;
let sharkSize = 4;
let sharkSizeStep = 1;
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
  console.log(sharkPos, sharkSize, cost)
  cost += result;
}

console.log(cost);

function bfs() {
  const queue = [sharkPos];
  const costs = arr.map(row => row.map(() => -1));

  costs[sharkPos[0]][sharkPos[1]] = 0;

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const cost = costs[i][j];

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

    if (eatable.length > 0) {
      const [ei, ej] = eatable[0];
      sharkPos = [ei, ej];

      sharkSizeStep += 1;
      if (sharkSizeStep === sharkSize) {
        sharkSize += 1;
        sharkSizeStep = 0;
      }

      arr[ei][ej] = 0;

      return costs[ei][ej];
    }
  }

  return false;
}

/*
problem

6
5 4 9 0 3 4
4 3 0 3 4 5
3 2 0 5 6 6
2 0 0 3 4 5
3 2 0 6 5 4
6 6 6 6 6 6

[0, 2] -> [0, 4] expected but
[0, 2] -> [1, 1] result
*/

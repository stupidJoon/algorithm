const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map((v) => v.split(''));

// normal
let isVisited = arr.map((v) => v.map(() => false));
let normal = 0;

function dfs(i, j) {
  const color = arr[i][j];

  [[0, -1], [-1, 0], [0, 1], [1, 0]]
    .map(([vi, vj]) => [i + vi, j + vj])
    .filter(([vi, vj]) => (vi >= 0 && vi < N) && (vj >= 0 && vj < N))
    .filter(([vi, vj]) => isVisited[vi][vj] === false)
    .filter(([vi, vj]) => arr[vi][vj] === color)
    .forEach(([vi, vj]) => {
      isVisited[vi][vj] = true;
      dfs(vi, vj)
    });
}

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (isVisited[i][j] === false) {
      isVisited[i][j] = true;
      dfs(i, j);
      normal += 1;
    }
  }
}

// color weak
isVisited = arr.map((v) => v.map(() => false));
let colorWeak = 0;

function colorWeakdfs(i, j) {
  const color = arr[i][j];

  [[0, -1], [-1, 0], [0, 1], [1, 0]]
    .map(([vi, vj]) => [i + vi, j + vj])
    .filter(([vi, vj]) => (vi >= 0 && vi < N) && (vj >= 0 && vj < N))
    .filter(([vi, vj]) => isVisited[vi][vj] === false)
    .filter(([vi, vj]) => {
      if (color === arr[vi][vj]) return true;
      if (color === 'R' && arr[vi][vj] === 'G') return true;
      if (color === 'G' && arr[vi][vj] === 'R') return true;
      return false;
    })
    .forEach(([vi, vj]) => {
      isVisited[vi][vj] = true;
      colorWeakdfs(vi, vj)
    });
}

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (isVisited[i][j] === false) {
      isVisited[i][j] = true;
      colorWeakdfs(i, j);
      colorWeak += 1;
    }
  }
}

console.log(normal, colorWeak)
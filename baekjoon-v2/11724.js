const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));

let map = Array
  .from({ length: N }, (_, k) => k + 1)
  .reduce((acc, v) => ({ ...acc, [v]: [] }), {});

map = arr.reduce((acc, [u, v]) => {
  acc[u].push(v);
  acc[v].push(u);
  return acc;
}, map);

const isVisited = Array.from({ length: N + 1 }, () => false);

function dfs(vertex) {
  map[vertex]
    .filter((v) => !isVisited[v])
    .forEach((v) => {
      isVisited[v] = true;
      dfs(v);
    });
}

let count = 0;

for (let i = 1; i <= N; i += 1) {
  if (!isVisited[i]) {
    count += 1;
    dfs(i);
  }
}

console.log(count);

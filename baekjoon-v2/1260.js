const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number);
const arr = input.map((value) => value.split(' ').map(Number));

const map = arr.reduce((acc, [v1, v2]) => {
  acc[v1] = (acc[v1]) ? [...acc[v1], v2] : [v2];
  acc[v2] = (acc[v2]) ? [...acc[v2], v1] : [v1];
  return acc;
}, {});

if (N < V) process.exit(0);
if (!map[V]) {
  console.log(V + '\n' + V);
  process.exit(0);
}

let isVisited = Array.from({ length: N }, () => false);

const dfsLog = [];
function dfs(v) {
  dfsLog.push(v);
  isVisited[v - 1] = true;
  map[v].sort((a, b) => a - b);
  map[v]
    .forEach((value) => {
      if (isVisited[value - 1]) return;
      dfs(value);
    })
}

const bfsLog = [];
function bfs() {
  let queue = [V];
  while (queue.length > 0) {
    const v = queue.shift();
    if (isVisited[v - 1]) continue;
    bfsLog.push(v);
    isVisited[v - 1] = true;
    const sorted = [...map[v]].sort((a, b) => a - b);
    queue = [...queue, ...sorted];
  }
}

dfs(V);
isVisited = isVisited.map(() => false);
bfs();

console.log(dfsLog.join(' '));
console.log(bfsLog.join(' '));
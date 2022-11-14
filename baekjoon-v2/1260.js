const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number);
const arr = input.map((val) => val.split(' ').map(Number));
const map = Array.from({ length: N }, (_, k) => k + 1).reduce((acc, val) => ({ ...acc, [val]: [] }), {});
arr.forEach(([v1, v2]) => {
  map[v1].push(v2);
  map[v2].push(v1);
});

Object.values(map).map((val) => val.sort((a, b) => a - b));

let isTraversed = Array.from({ length: N + 1 }, () => false);
let log = [];

dfs(V);

function dfs(vertex) {
  if (isTraversed[vertex]) return;

  log.push(vertex);

  isTraversed[vertex] = true;

  map[vertex].forEach(dfs);
}

console.log(log.join(' '));

isTraversed = Array.from({ length: N + 1 }, () => false);
log = [];

bfs(V);

function bfs(start) {
  let stack = [start];

  while (stack.length > 0) {
    const vertex = stack.shift();

    if (isTraversed[vertex]) continue;

    log.push(vertex);
    isTraversed[vertex] = true;

    stack = [...stack, ...map[vertex]];
  }
}

console.log(log.join(' '));

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const V = input[0].split(' ')[2];
const arr = input.slice(1).map((value) => value.split(' '));
const obj = arr.reduce((acc, [a, b]) => {
  if (acc[a]) acc[a].push(b);
  else acc[a] = [b];
  if (acc[b]) acc[b].push(a);
  else acc[b] = [a];
  return acc;
}, { });

let logs = [];
let isVisited = [];
function dfs(cur) {
  if (isVisited.includes(cur)) return;
  logs.push(cur);
  isVisited.push(cur);
  (obj[cur]?.sort((a, b) => a - b) ?? []).forEach((node) => {
    dfs(node);
  });
}

dfs(V);
console.log(logs.join(' '));

logs = [];
isVisited = [];
function bfs(root) {
  let queue = [root];
  while (queue.length > 0) {
    const cur = queue.shift();
    if (isVisited.includes(cur)) continue;
    logs.push(cur);
    isVisited.push(cur);
    queue = [...queue, ...(obj[cur]?.sort((a, b) => a - b) ?? [])];
  }
}

bfs(V);
console.log(logs.join(' '));

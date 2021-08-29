const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
const [N, K] = input.split(' ').map((v) => Number(v));

function bfs() {
  const queue = [N];
  const costs = { [N]: 0 };
  while (queue.length > 0) {
    const n = queue.shift();
    const c = costs[n];
    if (n === K) return c;
    const availableNodes = [n - 1, n + 1, n * 2].filter((v) => (costs[v] === undefined) && v >= 0 && v <= 100000);
    queue.push(...availableNodes);
    availableNodes.forEach((v) => { costs[v] = c + 1 });
  }
  return -1;
}

console.log(bfs());

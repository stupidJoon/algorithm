const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift().split(' ')[0]);
const arr = input.map(v => v.split(' ').map(Number));
const map = Object.fromEntries(
  Array.from({ length: N }, (_, k) => [k + 1, new Set()])
);

arr.forEach(([src, dst]) => {
  map[src].add(dst);
  map[dst].add(src);
});

const results = [];
for (let i = 1; i <= N; i += 1) {
  results.push(
    Array
      .from({ length: N }, (_, k) => k + 1)
      .filter(v => v !== i)
      .reduce((acc, v) => acc + bfs(i, v), 0)
  );
}

console.log(results.indexOf(Math.min(...results)) + 1);

function bfs(src, dst) {
  const queue = [src];
  const steps = Array(N + 1).fill(-1);
  steps[src] = 0;

  while (queue.length > 0) {
    const n = queue.shift();
    const step = steps[n];

    if (n === dst) {
      return step;
    }

    [...map[n]]
      .filter(v => steps[v] === -1)
      .forEach(v => {
        queue.push(v);
        steps[v] = step + 1;
      })
  }
}

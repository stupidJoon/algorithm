const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split(' ').map(Number));

const map = Array(N).fill().reduce((acc, _, i) => ({ ...acc, [i]: [] }), {});
for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (arr[i][j] === 1) {
      map[i].push(j);
    }
  }
}

for (let i = 0; i < N; i += 1) {
  console.log(
    Array
      .from({ length: N }, (_, k) => k)
      .map(v => bfs(i, v))
      .join(' ')
  );
}

function bfs(src, dst) {
  const queue = [src];
  const isVisited = Array(N).fill(false);

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === dst && isVisited[node]) return 1;

    map[node]
      .filter(v => isVisited[v] === false)
      .forEach(v => {
        isVisited[v] = true;
        queue.push(v);
      });
  }

  return 0;
}

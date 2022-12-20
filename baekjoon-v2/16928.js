const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.split(' ').map(Number));

const map = arr.reduce((acc, [src, dst]) => ({ ...acc, [src]: dst }), {});

const queue = [[1, 0]];
const isVisited = Array(101).fill(false);

while (queue.length > 0) {
  const [i, step] = queue.shift();

  if (i === 100) {
    console.log(step);
    break;
  }

  if (map[i] !== undefined) {
    queue.unshift([map[i], step]);
    isVisited[map[i]] = true;
    continue;
  }

  [
    i + 1,
    i + 2,
    i + 3,
    i + 4,
    i + 5,
    i + 6,
  ]
  .filter(v => v <= 100)
  .filter(v => isVisited[v] === false)
  .forEach(v => {
    isVisited[v] = true;
    queue.push([v, step + 1]);
  });
}

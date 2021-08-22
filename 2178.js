const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const maze = input.slice(1).map((value) => value.split('').map((val) => Number(val)));

function bfs() {
  const costs = maze.map((val) => val.map(() => 1));
  let queue = [[0, 0]];

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    const cost = costs[i][j];

    if (i === maze.length - 1 && j === maze[0].length - 1) {
      console.log(cost);
      return;
    }

    const availableRoutes = [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]].filter(([a, b]) => maze[a]?.[b] === 1 && costs[a][b] === 1);
    availableRoutes.forEach(([a, b]) => {
      costs[a][b] = cost + 1;
    });
    queue = [...queue, ...availableRoutes];
  }
}

bfs();

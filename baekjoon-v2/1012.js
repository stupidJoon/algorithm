const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let row = 1; row < input.length;) {
  const [M, N, K] = input[row].split(' ').map(Number);
  const map = Array.from(
    { length: N },
    () => Array.from({
      length: M
    }, () => false),
  );

  let count = 0;

  ((n) => {
    for (row += 1; row <= n + K; row += 1) {
      const [X, Y] = input[row].split(' ').map(Number);
      map[Y][X] = true;
    }
  })(row);

  const dfs = (i, j) => {
    [[-1, 0], [0, -1], [1, 0], [0, 1]]
      .map(([vi, vj]) => [i + vi, j + vj])
      .filter(([vi, vj]) => (vi >= 0 && vi < N) && (vj >= 0 && vj < M))
      .filter(([vi, vj]) => map[vi][vj] === true)
      .forEach(([vi, vj]) => {
        map[vi][vj] = false;
        dfs(vi, vj, map);
      });
  }



  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      if (map[i][j] === true) {
        count += 1;
        dfs(i, j, map);
      }
    }
  }

  console.log(count);
}

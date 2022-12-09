const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split(' ').map(Number));

console.log(
  f(0, 0, N).join('\n')
);

function f(i, j, n) {
  if (
    arr
      .slice(i, i + n)
      .map(row => row.slice(j, j + n))
      .every(row => row.every(v => v === arr[i][j]))
  ) {
    return [
      (arr[i][j] === -1) ? 1 : 0,
      (arr[i][j] === 0) ? 1 : 0,
      (arr[i][j] === 1) ? 1 : 0,
    ]
  }

  n = n / 3;

  return [
    f(i, j, n), f(i, j + n, n), f(i, j + n + n, n),
    f(i + n, j, n), f(i + n, j + n, n), f(i + n, j + n + n, n),
    f(i + n + n, j, n), f(i + n + n, j + n, n), f(i + n + n, j + n + n, n),
  ].reduce(
    (acc, val) => acc.map(
      (v, idx) => v + val[idx]
    )
  )
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split('').map(Number));

function f(i, j, n) {
  if (
    arr
      .slice(i, i + n)
      .map(row => row.slice(j, j + n))
      .every(row => row.every(v => v === arr[i][j]))
  ) {
    return arr[i][j].toString();
  }

  return (
    '(' +
    f(i, j, n / 2) +
    f(i, j + n / 2, n / 2) +
    f(i + n / 2, j, n / 2) +
    f(i + n / 2, j + n / 2, n / 2) +
    ')'
  );
}

console.log(f(0, 0, N));
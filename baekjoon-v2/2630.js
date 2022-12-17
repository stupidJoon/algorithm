const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(row => row.split(' ').map(Number));

console.log(f(0, 0, N).join('\n'));

function f(i, j, n) {
  const currentArr = arr
    .slice(i, i + n)
    .map(row => row.slice(j, j + n));
  const isFilled = currentArr.every(row => row.every(v => v === arr[i][j]));

  if (isFilled) {
    return (arr[i][j] === 0) ? [1, 0] : [0, 1];
  }

  const slicedN = n / 2;
  return [
    f(i, j, slicedN),
    f(i, j + slicedN, slicedN),
    f(i + slicedN, j, slicedN),
    f(i + slicedN, j + slicedN, slicedN),
  ].reduce((acc, val) => [acc[0] + val[0], acc[1] + val[1]], [0, 0]);
}

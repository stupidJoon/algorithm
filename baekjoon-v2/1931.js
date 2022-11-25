const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map((v) => v.split(' ').map(Number));

arr.sort((a, b) => (a[1] === b[1]) ? a[0] - b[0] : a[1] - b[1]);

let time = 0;

console.log(
  arr.reduce((acc, [src, dst]) => {
    if (src < time) return acc;
    time = dst;
    return acc + 1;
  }, 0)
)

const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

console.log(
  arr
    .map((sum => v => sum += v)(0))
    .reduce((acc, val) => acc + val)
);

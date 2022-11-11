const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const p = input[1].split(' ').map((val) => parseInt(val));

const n = 5;
const p = [3, 1, 4, 3, 2];
p.sort((a, b) => a - b);
console.log(p.reduce((acc, val) => {
  acc[0] = acc[0] + val;
  acc[1] = acc[1] + acc[0];
  return acc;
}, [0, 0])[1]);

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0].split(' ')[0]);
const A = input.slice(1, 1 + N).map((v) => v.split(' ').map(Number));
const B = input.slice(1 + N).map((v) => v.split(' ').map(Number));

const m = A.map((row, i) => row.map((v, j) => v + B[i][j]));

console.log(m.map((v) => v.join(' ')).join('\n'));

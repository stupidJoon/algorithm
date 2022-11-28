const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const nArr = new Set(input.slice(0, N));
const mArr = new Set(input.slice(N));

const arr = [...nArr].filter((v) => mArr.has(v));
arr.sort();

console.log(arr.length);
console.log(arr.join('\n'));

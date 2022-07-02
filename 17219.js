const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const nArr = input.slice(0, N);
const mArr = input.slice(N);

console.log(nArr, mArr);
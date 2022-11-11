const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const nArr = input.slice(0, N);
const mArr = input.slice(N);

const map = nArr.reduce((acc, val) => {
    acc[val] = 1;
    return acc;
}, {});

const result = mArr.filter((value) => map[value]);
result.sort();

console.log(result.length + '\n' + result.join('\n'));
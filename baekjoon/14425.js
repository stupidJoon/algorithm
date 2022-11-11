const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const S = input.slice(0, N);
const arr = input.slice(N);

const map = S.reduce((acc, val) => {
    acc[val] = 1;
    return acc;
}, {});

console.log(arr.filter((value) => map[value]).length);
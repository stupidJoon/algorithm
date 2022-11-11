const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const nArr = input[1].split(' ');
const mArr = input[3].split(' ');

const map = nArr.reduce((acc, val) => {
    acc[val] = 1;
    return acc;
}, {});

console.log(mArr.map((value) => map[value] ?? 0).join(' '));
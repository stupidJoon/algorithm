const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const A = input[1].split(' ');
const B = input[2].split(' ');

const map = B.reduce((acc, val) => {
    acc[val] = true;
    return acc;
}, {});

const duplicated = A.filter((value) => map[value]);

console.log((new Set([...A, ...B])).size - duplicated.length);
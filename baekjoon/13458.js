const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const A = input.shift().split(' ').map(Number);
const [B, C] = input.shift().split(' ').map(Number);

const count = A.reduce((acc, val) => {
    if (val - B < 0) return acc + 1;
    return acc + 1 + Math.ceil((val - B) / C);
}, 0);

console.log(count);
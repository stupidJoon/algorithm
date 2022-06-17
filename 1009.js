const fs = require('fs');

function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i += 1) {
        result = (result * a) % 10;
    }
    return (result === 0) ? 10 : result;
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input.shift());
const arr = input.map((value) => value.split(' ').map(Number));

console.log(arr.map(([a, b]) => pow(a, b)).join('\n'));
const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const obj = { 1: 1n, 2: 1n};
function f(n) {
    if (obj[n]) return obj[n];
    const result = (obj[n - 1] ?? f(n - 1)) + (obj[n - 2] ?? f(n - 2));
    obj[n] = result;
    return result;
}

for (let i = 1; i <= N; i += 1) {
    f(N);
}

console.log(f(N).toString());
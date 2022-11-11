const fs = require('fs');

function f(n) {
    let result = 1;
    for (let i = 2; i <= n; i += 1) {
        result *= i;
    }
    return result;
}

const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(f(N) / (f(N - K) * f(K)));
const fs = require('fs');

const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

function f(base, exponent) {
    if (exponent === 1n) return base % C;
    let result = f(base, BigInt(parseInt(exponent / 2n)));
    result = (result * result) % C;
    if (exponent % 2n === 1n) {
        result  = (result * base) % C;
    }
    return result % C;
}

console.log(Number(f(A, B)));
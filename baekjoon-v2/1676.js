const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let sum = 1n;
let zeroCount = 0;

for (let i = 2; i <= N; i += 1) {
  sum *= BigInt(i);
  while (sum % 10n === 0n) {
    sum /= 10n;
    zeroCount += 1;
  }
}

console.log(zeroCount);

const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

let min = -1;

for (let i = 0; i * 5 <= N; i += 1) {
    if ((N - i * 5) % 3 === 0) {
        min = i + (N - i * 5) / 3;
    }
}

console.log(min);
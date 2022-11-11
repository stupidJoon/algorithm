const fs = require('fs');

const S = fs.readFileSync('/dev/stdin').toString().trim();

const set = new Set();

function f(n) {
    for (let i = 0; i < S.length - n + 1; i += 1) {
        set.add(S.slice(i, i + n));
    }
    if (n === S.length) return;
    f(n + 1);
}

f(1);

console.log(set.size);
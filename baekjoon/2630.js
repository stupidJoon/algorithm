const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const map = input.map((v) => v.split(' ').map(Number));

function f(m) {
    const len = m.length;
    const isEqual = m.every((val) => val.every((v) => v === m[0][0]));
    if (isEqual) {
        return (m[0][0]) ? [0, 1] : [1, 0];
    } else {
        return [
            m.slice(0, len / 2).map((v) => v.slice(0, len / 2)),
            m.slice(0, len / 2).map((v) => v.slice(len / 2)),
            m.slice(len / 2).map((v) => v.slice(0, len / 2)),
            m.slice(len / 2).map((v) => v.slice(len / 2))
        ]
        .map((v) => f(v))
        .reduce(([w1, b1], [w2, b2]) => [w1 + w2, b1 + b2])
    }
}

console.log(f(map).join('\n'));
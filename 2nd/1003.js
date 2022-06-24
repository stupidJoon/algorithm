const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

const log = [];

const max = Math.max(...arr);

const dp = [[1, 0], [0, 1]];

for (let i = 2; i <= max; i += 1) {
    const [a, b] = [dp[i - 1], dp[i - 2]];
    dp.push([a[0] + b[0], a[1] + b[1]]);
}

console.log(arr.map((v) => dp[v].join(' ')).join('\n'));


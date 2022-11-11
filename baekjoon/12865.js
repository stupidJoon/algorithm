const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const arr = input.map((value) => value.split(' ').map((Number)));

const dp = [];

for (let i = 0; i < arr.length; i += 1) {
    dp.push([]);
    const [w, v] = arr[i];
    for (let j = 0; j <= K; j += 1) {
        if (j < w) dp[i].push(dp[i - 1]?.[j] ?? 0);
        else dp[i].push(Math.max((dp[i - 1]?.[j - w] ?? 0) + v, dp[i - 1]?.[j] ?? 0))
    }
}

console.log(dp[N - 1][K]);
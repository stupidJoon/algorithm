const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

const dp = [0, 1, 2, 4];

console.log(
  arr.map((n) => {
    for (let i = dp.length; i <= n; i += 1) {
      dp.push(dp[i - 1] + dp[i - 2] + dp[i - 3]);
    }
    return dp[n];
  }).join('\n')
);

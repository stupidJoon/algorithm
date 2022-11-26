const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const dp = [0, 1, 1, 1, 2, 2];

console.log(
  arr.map((N) => {
    for (let i = dp.length; i <= N; i += 1) {
      dp.push(dp[i - 1] + dp[i - 5])
    }
    return dp[N];
  }).join('\n')
);

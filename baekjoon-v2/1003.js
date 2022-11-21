const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1);

const dp = [[1, 0], [0, 1]]

console.log(
  arr.map((N) => {
    for (let i = dp.length; i <= N; i += 1) {
      dp.push([
        dp[i - 1][0] + dp[i - 2][0],
        dp[i - 1][1] + dp[i - 2][1],
      ]);
    }
    return dp[N].join(' ');
  }).join('\n')
);

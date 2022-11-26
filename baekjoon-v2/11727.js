const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = [0, 1, 3];

for (let i = dp.length; i <= n; i += 1) {
  dp.push(
    (dp[i - 1] + dp[i - 2] * 2) % 10007
  )
}

console.log(dp[n]);

const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = [0, 1, 2];

for (let i = 3; i <= n; i += 1) {
  dp.push((dp[i - 1] + dp[i - 2]) % 10007);
}

console.log(dp[n]);

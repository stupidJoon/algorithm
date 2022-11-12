const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const dp = [-1, 0];

for (let i = 2; i <= N; i += 1) {
  const min = Math.min(
    ...[
      i % 3 === 0 && dp[i / 3],
      i % 2 === 0 && dp[i / 2],
      dp[i - 1],
    ].filter((v) => v !== false)) + 1;
  dp.push(min);
}

console.log(dp[N]);

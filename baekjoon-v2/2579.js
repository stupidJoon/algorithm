const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const arr = input.map(Number);

const dp = [];

dp.push(arr[0]);
dp.push(arr[0] + arr[1]);
dp.push(Math.max(arr[0], arr[1]) + arr[2]);

for (let i = 4; i <= N; i += 1) {
  dp.push(Math.max(
    dp[i - 3] + arr[i - 1],
    dp[i - 2],
  ) + arr[i]);
}

console.log(dp);

// wip

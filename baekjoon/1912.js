const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(0, -1);
const arr = input[1].split(' ').map((value) => Number(value));

const dp = [arr[0]];
for (let i = 1; i < arr.length; i += 1) {
  dp.push(Math.max(dp[i - 1] + arr[i], arr[i]));
}

console.log(Math.max(...dp));

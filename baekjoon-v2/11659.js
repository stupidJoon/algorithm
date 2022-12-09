const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const nArr = input.shift().split(' ').map(Number);
const arr = input.map(ij => ij.split(' ').map(Number));

const dp = [nArr[0]];

for (let i = 1; i < nArr.length; i += 1) {
  dp.push(dp[i - 1] + nArr[i]);
}

console.log(arr
  .map(([i, j]) => dp[j - 1] - (dp[i - 2] ?? 0))
  .join('\n')
);
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(Number);
const arr = input.map((value) => value.split(' ').map((Number)));

// [6, 13], [4, 8], [3, 6], [5, 12]

const dp = [];

for (let i = 0; i <= arr.length; i += 1) {
    dp.push([]);
    for (let j = 0; j <= K; j += 1) {
        
        if (i === 0 || j === 0) {
            dp[i].push([0, 0]);
            continue;
        }
        const [W, V] = arr[i - 1];
        const left = dp[i - 1][j];
        const top = dp[i][j - 1];
        const leftCurrent = (left[1] + W <= j) ? [left[0] + V, left[1] + W] : left;
        const topCurrent = (top[1] + W <= j) ? [top[0] + V, top[1] + W] : top
        if (leftCurrent[0] > topCurrent[0]) {
            dp[i].push(leftCurrent);
        } else {
            dp[i].push(topCurrent);
        }
    }
}


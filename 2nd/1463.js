const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const dp = [0, 0]

for (let i = 1; i <= N; i += 1) {
    dp.push(
        Math.min(...[i - 1, i / 2, i / 3]
            .filter((value) => Number.isInteger(value))
            .map((value) => dp[value] + 1)
        )
    )
}

console.log(dp.pop());
const dp = { 0: 0, 1: 1 };

function solution(n) {
    for (let i = 2; i <= n; i += 1) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    return dp[n];
}
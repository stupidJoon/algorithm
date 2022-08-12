function solution(land) {
    const dp = [[...land[0]]];
    for (let i = 1; i < land.length; i += 1) {
        dp.push([]);
        for (let j = 0; j < 4; j += 1) {
            dp[i].push(Math.max(...dp[i - 1].filter((_, i) => i !== j)) + land[i][j]);
        }
    }
    return Math.max(...dp[land.length - 1]);
}
function solution(board) {
    const dp = board.map((v) => Array(v.length).fill(0));

    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
            if ((i === 0 || j === 0) && board[i][j]) {
                dp[i][j] = 1;
            }
        }
    }

    for (let i = 1; i < board.length; i += 1) {
        for (let j = 1; j < board[0].length; j += 1) {
            if (board[i][j]) {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
            }
        }
    }

    return Math.pow(Math.max(...dp.map((v) => Math.max(...v))), 2);
}
function solution(board, skill) {
  const prefixSum = board.map(row => row.map(() => 0));
  for (const [type, r1, c1, r2, c2, degree] of skill) {
    const value = degree * (type === 1 ? -1 : 1);

    prefixSum[r1][c1] += value;

    if (prefixSum[r1][c2 + 1] !== undefined) {
      prefixSum[r1][c2 + 1] += value * -1;
    }

    if (prefixSum[r2 + 1]?.[c1] !== undefined) {
      prefixSum[r2 + 1][c1] += value * -1;
    }

    if (prefixSum[r2 + 1]?.[c2 + 1] !== undefined) {
      prefixSum[r2 + 1][c2 + 1] += value;
    }
  }

  for (let col = 1; col < prefixSum[0].length; col += 1) {
    for (let row = 0; row < prefixSum.length; row += 1) {
      prefixSum[row][col] += prefixSum[row][col - 1];
    }
  }
  for (let row = 1; row < prefixSum.length; row += 1) {
    for (let col = 0; col < prefixSum[0].length; col += 1) {
      prefixSum[row][col] += prefixSum[row - 1][col];
    }
  }

  const result = board.map((row, i) => row.map((val, j) => val + prefixSum[i][j]));
  return result.reduce((acc, row) => acc + row.filter(v => v > 0).length, 0);
}

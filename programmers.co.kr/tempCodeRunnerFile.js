function solution(maps) {
  const queue = [[0, 0]];
  const costs = maps.map((val) => val.map(() => 0));

  const rowLen = maps.length;
  const colLen = maps[0].length;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    const cost = costs[y][x];

    [[1, 0], [0, 1], [-1, 0], [0, -1]].forEach(([opX, opY]) => {
      const [nx, ny] = [x + opX, y + opY];
      if (nx >= 0 && ny >= 0 && nx < colLen && ny < rowLen && maps[ny][nx] === 1 && costs[ny][nx] === 0) {
        queue.push([nx, ny]);
        costs[ny][nx] = cost + 1;
      }
    });
  }
  return costs[rowLen - 1][colLen - 1] === 0 ? -1 : costs[rowLen - 1][colLen - 1] + 1;
}
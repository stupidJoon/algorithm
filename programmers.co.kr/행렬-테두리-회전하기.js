function solution(rows, columns, queries) {
  let map = [];

  for (let i = 0; i < rows + 1; i += 1) {
    map.push([]);
    for (let j = 0; j < columns; j += 1) {
      map[i].push(i * columns + (j + 1));
    }
  }

  map = [
    Array(columns).fill(-1),
    ...map.map(v => [-1, ...v])
  ];

  tempMap = map.map(v => [...v]);

  for (const [r1, c1, r2, c2] of queries) {
    // [x1, y1] -> [x2, y1]
    for (let c = c1 + 1; c <= c2; c += 1) {
      tempMap[r1][c] = map[r1][c - 1];
    }
    // [x2, y1] -> [x2, y2]
    for (let r = r1 + 1; r <= r2; r += 1) {
      tempMap[r][c2] = map[r - 1][c2];
    }
    // [x2, y2] -> [x1, y2]
    for (let c = c2 - 1; c >= c1; c -= 1) {
      tempMap[r2][c] = map[r2][c + 1];
    }
    // [x1, y2] -> [x1, y1]
    for (let r = r2 - 1; r >= r1; r -= 1) {
      tempMap[r][c1] = map[r + 1][c1];
    }
  }
  console.log(tempMap)
}

solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]], [8, 10, 25])

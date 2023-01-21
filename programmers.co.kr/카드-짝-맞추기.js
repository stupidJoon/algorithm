function copyArr(arr) {
  return arr.map(v => [...v]);
}
function isClear(arr) {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      if (arr[i][j] !== 0) return false;
    }
  }
  return true;
}
function emptyArr() {
  return [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]
}

function solution(board, r, c) {
  // [row, col, board, selectedCard, count, visitedMap]
  const queue = [[r, c, copyArr(board), 0, 0, emptyArr()]];

  while (queue.length > 0) {
    let [row, col, b, selectedCard, count, visitedMap] = queue.shift();
    b = copyArr(b);
    visitedMap = copyArr(visitedMap);

    console.log(count)

    // Enter
    if (b[row][col] !== 0 && selectedCard === 0) {
      queue.push([row, col, b, b[row][col], count + 1, visitedMap]);
      b[row][col] = 0;
      visitedMap = emptyArr();
    }
    if (b[row][col] !== 0 && selectedCard !== 0 && b[row][col] === selectedCard) {
      queue.push([row, col, b, 0, count + 1, visitedMap]);
      b[row][col] = 0;
      visitedMap = emptyArr();

      if (isClear(b)) return count + 1;
    }

    // Arrow
    [[-1, 0], [0, -1], [1, 0], [0, 1]]
      .map(([ar, ac]) => [row + ar, col + ac])
      .filter(([ar, ac]) => ar >= 0 && ar < 4 && ac >= 0 && ac < 4)
      .filter(([ar, ac]) => visitedMap[ar][ac] === false)
      .forEach(([ar, ac]) => {
        queue.push([ar, ac, b, selectedCard, count + 1, visitedMap]);
        visitedMap[ar][ac] = true;
      });

    // Ctrl + Arrow
    [[row, 0], [row, 3], [0, col], [3, col]]
      .filter(([ar, ac]) => visitedMap[ar][ac] === false)
      .forEach(([ar, ac]) => {
        queue.push([ar, ac, b, selectedCard, count + 1, visitedMap]);
        visitedMap[ar][ac] = true;
      })
  }
}

// solution([[1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0]], 1, 0)
solution([[1, 0, 0, 3], [2, 0, 0, 0], [0, 0, 0, 2], [3, 0, 1, 0]], 1, 0)

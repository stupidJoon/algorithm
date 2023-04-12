function solution(m, n, board) {
  while (remove()) {
    fall();
  }

  return board.reduce(
    (acc, row) => acc + row.filter(v => v === null).length,
    0,
  );

  function remove() {
    let isRemoved = false;
    const nextBoard = board.map(v => [...v]);
    for (let i = 0; i < m; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const ch = board[i][j];
        if (ch === null) continue;
        if ([
          board[i][j + 1],
          board[i + 1]?.[j],
          board[i + 1]?.[j + 1],
        ].every(v => v === ch)) {
          nextBoard[i][j] = null;
          nextBoard[i][j + 1] = null;
          nextBoard[i + 1][j] = null;
          nextBoard[i + 1][j + 1] = null;
          isRemoved = true;
        }
      }
    }
    board = nextBoard;
    return isRemoved;
  }

  function fall() {
    for (let i = m - 1; i >= 0; i -= 1) {
      for (let j = 0; j < n; j += 1) {
        const ch = board[i][j];
        if (ch === null) continue;
        for (let k = i; board[k + 1]?.[j] === null; k += 1) {
          board[k][j] = null;
          board[k + 1][j] = ch;
        }
      }
    }
  }
}

console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
)

/*
TTTANT
RRFACC
RRRFCC
TRRRAA
TTMMMF
TMMTTJ
*/

let maxStep = 0;

function solution(board, aloc, bloc) {
  moveA(board, aloc, bloc, 0);
  console.log(maxStep);
}

function moveA(board, aloc, bloc, step) {
  if (board[aloc[0]][aloc[1]] === 0) {
    maxStep = Math.max(maxStep, step);
    return;
  }

  board[aloc[0]][aloc[1]] = 0;

  const availableRoutes = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    .map(([vi, vj]) => [aloc[0] + vi, aloc[1] + vj])
    .filter(([ai, aj]) => board[ai]?.[aj] === 1)

  if (availableRoutes.length === 0) {
    maxStep = Math.max(maxStep, step);
    return;
  }

  availableRoutes.forEach(([ai, aj]) => {
    moveB(board.map(row => [...row]), [ai, aj], bloc, step + 1);
  });
}

function moveB(board, aloc, bloc, step) {
  if (board[bloc[0]][bloc[1]] === 0) {
    maxStep = Math.max(maxStep, step);
    return;
  }

  board[bloc[0]][bloc[1]] = 0;

  const availableRoutes = [[-1, 0], [0, -1], [1, 0], [0, 1]]
    .map(([vi, vj]) => [bloc[0] + vi, bloc[1] + vj])
    .filter(([bi, bj]) => board[bi]?.[bj] === 1)

  if (availableRoutes.length === 0) {
    maxStep = Math.max(maxStep, step);
    return;
  }

  availableRoutes.forEach(([bi, bj]) => {
    moveA(board.map(row => [...row]), aloc, [bi, bj], step + 1);
  });
}

function solution(info, edges) {
  const map = edges.reduce((acc, [a, b]) => {
    if (acc[a] === undefined) acc[a] = [b];
    else acc[a].push(b);

    if (acc[b] === undefined) acc[b] = [a];
    else acc[b].push(a);

    return acc;
  }, {});

  let maxSheep = 0;
  const baseRecentSheeps = info.map(() => 0);
  const queue = [[0, 1, 0, baseRecentSheeps]];

  baseRecentSheeps[0] = 1;

  while (queue.length > 0) {
    const [node, sheep, wolf, recentSheeps] = queue.shift();

    if (sheep > maxSheep) maxSheep = sheep;
    recentSheeps[node] = sheep;

    map[node]
      .filter(n => !(info[n] === 1 && wolf + 1 >= sheep))
      .filter(n => recentSheeps[n] < recentSheeps[node])
      .forEach(n => {
        if (recentSheeps[n] !== 0) {
          queue.push([n, sheep, wolf, [...recentSheeps]]);
        }
        else if (info[n] === 0) {
          queue.push([n, sheep + 1, wolf, [...recentSheeps]]);
        }
        else {
          queue.push([n, sheep, wolf + 1, [...recentSheeps]]);
        }
      });
  }

  return maxSheep;
}

solution([0,0,1,1,1,0,1,0,1,0,1,1],	[[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]])

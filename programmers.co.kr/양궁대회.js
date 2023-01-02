function solution(n, info) {
  const scoresArr = 
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      .flatMap(v => dfs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n, v))
    
  const maxDiff = scoresArr.reduce((acc, scores) => {
    const diff = calculateScoreDiff(scores, info);
    if (diff > acc[0]) return [diff, scores];
    return acc;
  }, [0]);
    
  return maxDiff[1] ?? [-1];
}

function dfs(scores, remain, shot) {
  scores[10 - shot] += 1;
    
  if (remain === 1) return [scores];

  const scoresArr = 
    Array
      .from({ length: 11 - shot }, (_, k) => k + shot)
      .flatMap(v => dfs([...scores], remain - 1, v));

  return scoresArr;
}

function calculateScoreDiff(ryan, apeach) {
  let ryanScore = 0;
  let apeachScore = 0;
  for (let i = 0; i <= 10; i += 1) {
    if (ryan[i] === 0 && apeach[i] === 0) continue;
    if (ryan[i] > apeach[i]) {
      ryanScore += (10 - i);
    } else {
      apeachScore += (10 - i);
    }
  }
  return ryanScore - apeachScore;
}


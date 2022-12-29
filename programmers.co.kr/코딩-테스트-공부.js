function solution(alp, cop, problems) {
  const [goalAlp, goalCop] = problems.reduce(([maxAlp, maxCop], [curAlp, curCop]) => {
    if (curAlp > maxAlp) maxAlp = curAlp;
    if (curCop > maxCop) maxCop = curCop;
    return [maxAlp, maxCop];
  }, [alp, cop]);

  const dp = Array.from({ length: goalAlp + 1 }, () => Array(goalCop + 1).fill(Infinity));
  dp[alp][cop] = 0;

  for (let curAlp = alp; curAlp <= goalAlp; curAlp += 1) {
    for (let curCop = cop; curCop <= goalCop; curCop += 1) {
      if (curAlp + 1 <= goalAlp) {
        dp[curAlp + 1][curCop] = Math.min(dp[curAlp + 1][curCop], dp[curAlp][curCop] + 1);
      }
      if (curCop + 1 <= goalCop) {
        dp[curAlp][curCop + 1] = Math.min(dp[curAlp][curCop + 1], dp[curAlp][curCop] + 1);
      }

      problems.forEach(([reqAlp, reqCop, rwdAlp, rwdCop, cost]) => {
        if (curAlp < reqAlp || curCop < reqCop) return;
        const nextAlp = curAlp + rwdAlp > goalAlp ? goalAlp : curAlp + rwdAlp;
        const nextCop = curCop + rwdCop > goalCop ? goalCop : curCop + rwdCop;
        dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[curAlp][curCop] + cost);
      });
    }
  }

  return dp[goalAlp][goalCop];
}

console.log(
  solution(10, 10, [[10,15,2,1,2],[20,20,3,3,4]])
);

/*
goal: 20 20

12 16
min(
  dp[12][15] + 1
  dp[11][15] + 1
  dp[10][15] + 2
)

*/

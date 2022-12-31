// function solution(n, info) {
//   const scoresArr = dfs([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], n);
//   const maxDiff = scoresArr.reduce((acc, scores) => {
//     const diff = calculateScoreDiff(scores, info);
//     if (diff > acc[0]) return [diff, [scores]];
//     if (diff === acc[0]) {
//       acc[1].push(scores);
//       return acc;
//     }
//     return acc;
//   }, [0, []]);
//   console.log(maxDiff[0], maxDiff[1][0])
// }

// function dfs(scores, remain) {
//   if (remain === 0) return [scores];

//   const scoresArr =
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//     .map(v => {
//       const s = [...scores];
//       s[v] += 1;
//       return s;
//     })
//     .flatMap(v => dfs(v, remain - 1));

//   return scoresArr;
// }

// function calculateScoreDiff(ryan, apeach) {
//   let ryanScore = 0;
//   let apeachScore = 0;
//   for (let i = 0; i <= 10; i += 1) {
//     if (ryan[i] === 0 && apeach[i] === 0) continue;
//     if (ryan[i] > apeach[i]) {
//       ryanScore += (10 - i);
//     } else {
//       apeachScore += (10 - i);
//     }
//   }
//   return ryanScore - apeachScore;
// }

// solution(6,	[2,1,1,1,0,0,0,0,0,0,0])

// 1. 어피치가 안쏜점수중에서 가장 높은 점수들 쏘기
// 2. 1번 + 어피치가 쏜 가장큰 점수 쏘기
// n. 1 + 어피치가 쏜 n개의 가장 큰 점수 쏘기

function solution(n, info) {
  // 어피치가 쏜 점수 인덱스 리스트 [10, 9, 8, 7]
  const apeachShot = info.flatMap((v, i) => (v === 0) ? [] : [10 - i]);

  // 1번
  let score1 = 0;
  let shot1 = n;
  for (let score = 10; score >= 0 && shot1 > 0; score -= 1) {
    if (apeachShot.includes(score)) continue;
    score1 += score;
    shot1 -= 1;
  }
}

solution(5,	[2,1,1,1,0,0,0,0,0,0,0])

let R;

function isValid(cKeys) {
  if (cKeys.length === 0) return false;
  const s = new Set();
  for (const row of R) {
    s.add(cKeys.map(k => row[k]).join(''));
  }
  return s.size === R.length;
}

function f(cKeys, keys) {
  console.log(cKeys)
  if (isValid(cKeys)) { return 1; }

  let sum = 0;

  for (let i = 0; i < keys.length; i += 1) {
    sum += f([...cKeys, keys[i]], [...keys.slice(0, i), ...keys.slice(i + 1)]);
    const candidates = [...keys, keys[i]];
  }

  return sum;
}

function solution(relation) {
  R = relation;
  const keys = Array.from({ length: relation[0].length }, (_, k) => k);

  return f([], keys);
}

console.log(
  solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]])
);

// 0 1 2 3

// [0] [1] [2] [3]
// [1] [2] [3] [01] [02][]

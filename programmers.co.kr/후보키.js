// let R;

// function isValid(keys) {
//   if (keys.length === 0) return false;
//   const s = new Set();
//   for (const row of R) {
//     s.add(keys.map(k => row[k]).join(''));
//   }
//   return s.size === R.length;
// }

// function f(cKeys, keys) {
//   console.log(cKeys)
//   if (isValid(cKeys)) { return 1; }

//   let sum = 0;

//   for (let i = 0; i < keys.length; i += 1) {
//     sum += f([...cKeys, keys[i]], [...keys.slice(0, i), ...keys.slice(i + 1)]);
//     const candidates = [...keys, keys[i]];
//   }

//   return sum;
// }

// function solution(relation) {
//   R = relation;
//   const keys = Array.from({ length: relation[0].length }, (_, k) => k);

//   return f([], keys);
// }

// console.log(
//   solution([["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]])
// );

// // 0 1 2 3

// // [0] [1] [2] [3]
// // [1] [2] [3] [01] [02][]



// const keys = [0, 1, 2, 3];
// const availableKeys = combination([], keys);

// console.log(uniqueKeys)

// function combination(array, candidates) {
//   if (candidates.length === 0) return [array];
//   if (array.length === 0) return candidates.map((v, i) => combination([v], candidates.slice(i + 1))).flat();

//   return [
//     array,
//     ...candidates.map(
//       (v, i) => combination([...array, v], candidates.slice(i + 1))
//     ).flat()
//   ];
// }

let R;

function isValid(keys) {
  if (keys.length === 0) return false;
  const s = new Set();
  for (const row of R) {
    s.add(keys.map(k => row[k]).join(''));
  }
  return s.size === R.length;
}

function solution(relation) {
  R = relation;
  const columns = Array.from({ length: relation[0].length }, (_, i) => i);
  let candidates = [];
  const queue = columns.map(col => [col]);

  while (queue.length > 0) {
    const keys = queue.shift();

    if (isValid(keys)) {
      candidates.push(keys);
      continue;
    }

    queue.push(
      ...columns
        .slice(keys.at(-1) + 1)
        .map(k => [...keys, k])
    );
  }


  candidates = candidates.filter((candidate, i) => {
    for (const beforeCandidate of candidates.slice(0, i)) {
      if (beforeCandidate.every(k => candidate.includes(k)))
        return false;
    }
    return true;
  });

  return candidates.length;
}

console.log(
  solution([['a',1,'aaa','c','ng'],['b',1,'bbb','c','g'],['c',1,'aaa','d','ng'],['d',2,'bbb','d','ng']])
)

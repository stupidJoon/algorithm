function solution(info, queries) {
  const map = {};

  function mapPush(k, v) {
    if (map[k] === undefined) {
      map[k] = [v];
    } else {
      map[k].push(v);
    }
  }

  for (const i of info) {
    let [language, position, career, food, score] = i.split(' ');
    score = Number(score);

    // java backend junior pizza
    // - backend junior pizza
    // - - junior pizza
    // - - - pizza
    // - - - -
    // ...
  }

  return queries.map(query => {
    const [language, position, career, temp] = query.split('and').map(v => v.trim());
    let [food, score] = temp.split(' ');
    score = Number(score);

    const availables = map[`${language}${position}${career}${food}`];

    console.log(query, availables)

    if (availables === undefined) return 0;
    availables.sort((a, b) => a - b);

    return binarySearch(availables, score, 0, availables.length - 1);
  });
}

function f(str, cnt, arr) {
  if (cnt === 4) return arr;

}

function binarySearch(arr, threshold, left, right) {
  if (left === arr.length) return 0;
  if (left > right) return arr.length - left;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] >= threshold) {
    return binarySearch(arr, threshold, left, mid - 1);
  } else {
    return binarySearch(arr, threshold, mid + 1, right);
  }
}

// 150 || 50 80 150 150 210 260

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])



// function old_solution(info, queries) {
//   const languageMap = { cpp: 0, java: 0, python: 0 };
//   const positionMap = { backend: 0, frontend: 0 };
//   const careerMap = { junior: 0, senior: 0 };
//   const soulfoodMap = { chicken: 0, pizza: 0 };

//   const scores = [];

//   for (let i = 0; i < info.length; i += 1) {
//     const [language, position, career, soulfood, score] = info[i].split(' ');

//     languageMap.cpp = languageMap.cpp << 1;
//     languageMap.java = languageMap.java << 1;
//     languageMap.python = languageMap.python << 1;
//     languageMap[language] += 1;

//     positionMap.backend = positionMap.backend << 1;
//     positionMap.frontend = positionMap.frontend << 1;
//     positionMap[position] += 1;

//     careerMap.junior = careerMap.junior << 1;
//     careerMap.senior = careerMap.senior << 1;
//     careerMap[career] += 1;

//     soulfoodMap.chicken = soulfoodMap.chicken << 1;
//     soulfoodMap.pizza = soulfoodMap.pizza << 1;
//     soulfoodMap[soulfood] += 1;

//     scores.push(Number(score));
//   }

//   const maxBit = Math.pow(2, info.length) - 1;

//   // console.log(languageMap, positionMap, careerMap, soulfoodMap);
//   // console.log(careerMap.junior.toString(2));

//   return queries.map(query => {
//     const [language, position, career, temp] = query.split('and').map(v => v.trim());
//     let [soulfood, score] = temp.split(' ');
//     score = Number(score);

//     return (
//       (language === '-' ? maxBit : languageMap[language]) &
//       (position === '-' ? maxBit : positionMap[position]) &
//       (career === '-' ? maxBit : careerMap[career]) &
//       (soulfood === '-' ? maxBit : soulfoodMap[soulfood])
//     )
//       .toString(2)
//       .padStart(info.length, '0')
//       .split('')
//       .filter((v, i) => v === '1' && scores[i] >= score)
//       .length;
//   });
// }

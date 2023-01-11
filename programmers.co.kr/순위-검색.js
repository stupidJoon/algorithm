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

    for (let i = 0; i < 2; i += 1) {
      for (let j = 0; j < 2; j += 1) {
        for (let k = 0; k < 2; k += 1) {
          for (let l = 0; l < 2; l += 1) {
            mapPush(`${i ? language : '-'}${j ? position : '-'}${k ? career : '-'}${l ? food : '-'}`, score);
          }
        }
      }
    }
  }

  for (const v of Object.values(map)) {
    v.sort((a, b) => a - b);
  }

  return queries.map(query => {
    const [language, position, career, temp] = query.split('and').map(v => v.trim());
    let [food, score] = temp.split(' ');
    score = Number(score);

    const availables = map[`${language}${position}${career}${food}`];

    if (availables === undefined) return 0;

    return binarySearch(availables, score, 0, availables.length - 1);
  });
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

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])

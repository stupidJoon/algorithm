function solution(places) {
  return places.map(place => {
    const pArr = [];
    for (let i = 0; i < place.length; i += 1) {
      for (let j = 0; j < place[0].length; j += 1) {
        if (place[i][j] === 'P') pArr.push([i, j]);
      }
    }

    for (let i = 0; i < pArr.length; i += 1) {
      for (let j = i + 1; j < pArr.length; j += 1) {
        const mDistance = Math.abs(pArr[i][0] - pArr[j][0]) + Math.abs(pArr[i][1] - pArr[j][1])

        if (mDistance < 2) return 0;
        if (mDistance === 2) {
          if (place[(pArr[i][0] + pArr[j][0]) / 2]?.[(pArr[i][1] + pArr[j][1]) / 2] === 'X') continue;
          if (
            Math.abs(pArr[i][0] - pArr[j][0]) === 1 &&
            Math.abs(pArr[i][1] - pArr[j][1]) === 1 &&
            place[pArr[i][0]][pArr[j][1]] === 'X' &&
            place[pArr[j][0]][pArr[i][1]] === 'X'
          ) continue;
          return 0;
        }
      }
    }

    return 1;
  });
}

console.log(
  solution([["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"]])
);

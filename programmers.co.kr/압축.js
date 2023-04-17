function solution(msg) {
  const answer = [];
  const dic = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].reduce(
    (acc, v, i) => ({ ...acc, [v]: i + 1 }), {}
  );

  for (let i = 0; i < msg.length;) {
    let str = msg[i];

    for (let j = i + 1; j < msg.length; j += 1) {
      if (dic[str + msg[j]] === undefined) {
        dic[str + msg[j]] = Object.keys(dic).length + 1;
        break;
      }
      str += msg[j];
    }

    answer.push(dic[str]);
    i += str.length;
  }

  return answer;
}

console.log(
  // solution('KAKAO')
  solution('TOBEORNOTTOBEORTOBEORNOT')
);

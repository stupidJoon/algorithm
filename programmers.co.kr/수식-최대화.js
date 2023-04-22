function solution(expression) {
  const arr = expression.split('').reduce((acc, ch) => {
    if (ch >= '0' && ch <= '9') {
      acc[acc.length - 1] = acc[acc.length - 1] + ch;
    } else {
      acc.push(ch, '');
    }
    return acc;
  }, ['']);
  const operators = [...new Set(arr.filter(v => isNaN(Number(v))))];
  const operatorCases = permutation(operators);
  let maxResult = 0;

  for (const operatorCase of operatorCases) {
    let result = [...arr];
    for (const operator of operatorCase) {
      const nextResult = [];
      for (let i = 0; i < result.length;) {
        if (result[i] === operator) {
          nextResult[nextResult.length - 1] = eval(nextResult.at(-1) + result[i] + result[i + 1]);
          i += 2;
        } else {
          nextResult.push(result[i]);
          i += 1;
        }
      }
      result = nextResult;
    }
    maxResult = Math.max(maxResult, Math.abs(result[0]))
  }

  return maxResult;
}

function permutation(arr) {
  if (arr.length === 1) return [arr];
  return arr.flatMap(fixed =>
    permutation(arr.filter(v => v !== fixed)).map(perms => [fixed, ...perms])
  );
}



console.log(
  solution("100-200*300-500+20")
);

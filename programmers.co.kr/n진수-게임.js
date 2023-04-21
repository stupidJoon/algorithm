function solution(n, t, m, p) {
  const arr = [];
  for (let i = 0; arr.length <= t * m; i += 1) {
    const digits = i.toString(n);
    arr.push(...digits.split(''));
  }
  return arr.filter((_, i) => i % m === p - 1).slice(0, t).join('').toUpperCase();
}

console.log(
  solution(2, 4, 2, 1)
);

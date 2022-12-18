const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.split(' ').map(Number));

function f(a, b) {
  if (a % b === 0) return b;
  return f(b, a % b);
}

console.log(
  arr.map(([M, N, x, y]) => {
    const gcd = (M > N) ? f(M, N) : f(N, M);
    const lcm = gcd * (M / gcd) * (N / gcd);
    for (let i = x; i <= lcm; i += M) {
      if (i % N === y) return i;
      if (i % N === 0 && y === N) return i;
    }
    return -1;
  }).join('\n')
);

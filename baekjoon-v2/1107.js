const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input[0].split('').map(Number);
const M = (input[2]) ? input[2].split(' ').map(Number) : [];
const availables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(v => !M.includes(v));

const defaultResult = Math.abs(Number(N.join('')) - 100);

if (availables.length === 0) {
  console.log(defaultResult);
  process.exit(0);
}

let result = N.length;

let left = min(...availables.map(v => N[0] - v), N[0]);

let tenDigit = min(
  ...Array.from({ length: 89 }, (_, k) => k + 10)
  .filter(v => {
    const [second, first] = [Math.floor(v / 10), v % 10];
    return !M.includes(second) && !M.includes(first);
  })
  .map(v => N[0] - v)
);

if (min(left, tenDigit) === tenDigit) {
  left = tenDigit;
  result += 1;
}

for (let i = 1; i < N.length; i += 1) {
  const num = left * 10 + N[i];
  left = min(...availables.map(v => num - v));
}

result += Math.abs(left);

if (defaultResult < result) {
  console.log(defaultResult);
} else {
  console.log(result);
}

function min(...arr) {
  if (arr.length === 0) return Number.MAX_SAFE_INTEGER;
  return arr.reduce((acc, val) => {
    if (Math.abs(acc) > Math.abs(val)) return val;
    return acc;
  });
}

/*
99999
9
0 2 3 4 5 6 7 8 9

답 : 11118

50000
9
0 1 2 3 4 5 6 7 8

답 : 40005

9
9
1 2 3 4 5 6 7 8 9

답 : 10
*/

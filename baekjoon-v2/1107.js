const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const NStr = N.toString();
const notAvailables = (input[1] === '0') ? [] : input[2].split(' ').map(Number);
const availables = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(v => !notAvailables.includes(v));

const end = Number('9'.repeat(NStr.length + 1));

let min = Number.MAX_SAFE_INTEGER;
let num = 0;

for (let i = 0; i <= end; i += 1) {
  if (i.toString().split('').some(v => !availables.includes(Number(v)))) {
    continue;
  }

  const diff = Math.abs(N - i);
  if (min > diff) {
    min = diff;
    num = i;
  }
}

const result = min + num.toString().length;

const currentResult = Math.abs(100 - N);

if (result > currentResult) {
  console.log(currentResult);
} else {
  console.log(result);
}

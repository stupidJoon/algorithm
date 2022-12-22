const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2];

const pattern = Array(N + 1).fill('I').join('O');
let count = 0;

for (let i = 0; i <= M - pattern.length; i += 1) {
  if (S[i] === 'I') {
    let length = 0;
    while (true) {
      if (S[i + 1] === 'O' && S[i + 2] === 'I') {
        length += 1;
        i += 2;
      } else break;
    }
    count += (length - N + 1 < 0) ? 0 : length - N + 1;
  }
}

console.log(count);

const fs = require('fs');

const [M, N] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = Array.from({ length: N + 1 }, () => true);

for (let i = 2; i <= N; i += 1) {
  if (arr[i] === false) continue;

  if (i >= M) console.log(i);

  for (let j = i; j <= N; j += i) {
    arr[j] = false;
  }
}

const fs = require('fs');

const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log(f());

function f() {
  const pow1 = [];
  for (let i = 1; i <= Math.sqrt(n); i += 1) {
    if (i * i === n) return 1;
    pow1.push(i * i);
  }

  const pow2 = [];
  for (let i = 0; i < pow1.length; i += 1) {
    for (let j = i; j < pow1.length; j += 1) {
      if (pow1[i] + pow1[j] === n) return 2;
      pow2.push(pow1[i] + pow1[j])
    }
  }

  for (let i = 0; i < pow1.length; i += 1) {
    for (let j = 0; j < pow2.length; j += 1) {
      if (pow1[i] + pow2[j] === n) return 3;
    }
  }

  return 4;
}

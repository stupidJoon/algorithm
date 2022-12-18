const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.split(' ').map(Number));

console.log(
  arr.map(([A, B]) => {
    const queue = [[A, '']];
    while (queue.length > 0) {
      const [n, commands] = queue.shift();

      if (n === B) {
        return commands;
      }

      queue.push(
        [D(n), commands + 'D'],
        [S(n), commands + 'S'],
        [L(n), commands + 'L'],
        [R(n), commands + 'R'],
      );
    }
  }).join('\n')
)



function D(n) {
  n *= 2;
  if (n >= 10000) n %= 10000;
  return n;
}
function S(n) {
  n -= 1;
  if (n === 0) n = 9999;
  return n;
}
function L(n) {
  return (n % 1000) * 10 + Math.floor(n / 1000);
}
function R(n) {
  return (n % 10) * 1000 + Math.floor(n / 10);
}

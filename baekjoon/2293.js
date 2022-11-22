const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const K = input.shift().split(' ').map(Number)[1];
const coins = input.map(Number);

let cnt = 0;

function f(remaining, count, step) {
  if (remaining === 0) {
    cnt += 1;
    return;
  }
  if (remaining < 0) {
    return;
  }
  if (step < 0) {
    return;
  }

  const coin = coins[step];
  let maxCount = Math.floor(remaining / coin);

  for (let i = maxCount; i >= 0; i -= 1) {
    f(remaining - coin * i, count + i, step - 1);
  }
}

f(K, 0, coins.length - 1);

console.log(cnt);

// 메모리초과...

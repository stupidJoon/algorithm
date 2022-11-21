const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const K = input.shift().split(' ').map(Number)[1];
const arr = input.map(Number);

const availableCoins = arr.filter((v) => v <= K);

function f(remaining, count, step) {
  if (remaining === 0) {
    console.log(count);
    process.exit(0);
  }
  if (remaining < 0) {
    return;
  }
  if (step < 0) {
    return;
  }

  const coin = availableCoins[step];
  let maxCount = Math.floor(remaining / coin);

  for (let i = maxCount; i >= 0; i -= 1) {
    f(remaining - coin * i, count + i, step - 1);
  }
}

f(K, 0, availableCoins.length - 1);

// ???????????

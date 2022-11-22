// const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const K = input.shift().split(' ').map(Number)[1];
// const arr = input.map(Number);

// const availableCoins = arr.filter((v) => v <= K);

// function f(remaining, count, step) {
//   if (remaining === 0) {
//     console.log(count);
//     process.exit(0);
//   }
//   if (remaining < 0) {
//     return;
//   }
//   if (step < 0) {
//     return;
//   }

//   const coin = availableCoins[step];
//   let maxCount = Math.floor(remaining / coin);

//   for (let i = maxCount; i >= 0; i -= 1) {
//     f(remaining - coin * i, count + i, step - 1);
//   }
// }

// f(K, 0, availableCoins.length - 1);

// 불필요함, recursion이 아닌 greedy로 적용가능

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let K = input.shift().split(' ').map(Number)[1];
const arr = input.map(Number).reverse();

console.log(
  arr.reduce((acc, val) => {
    const count = Math.floor(K / val);
    K -= val * count;
    return acc + count;
  }, 0)
);

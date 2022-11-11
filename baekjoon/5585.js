const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let change = 1000 - input[0];
// let change = 1000 - 380;
let cnt = 0;
for (; change >= 500; change -= 500) cnt += 1;
for (; change >= 100; change -= 100) cnt += 1;
for (; change >= 50; change -= 50) cnt += 1;
for (; change >= 10; change -= 10) cnt += 1;
for (; change >= 5; change -= 5) cnt += 1;
for (; change >= 1; change -= 1) cnt += 1;
console.log(cnt);

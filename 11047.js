const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [n, k] = input[0].split(' ').map((val) => parseInt(val));
const a = input.slice(1).map((val) => parseInt(val)).filter((val) => !isNaN(val));

a.reverse()
console.log(a.reduce((acc, val) => {
  let cnt = 0;
  for (; k >= val; k -= val) cnt += 1;
  return acc + cnt;
}, 0));

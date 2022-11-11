const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let t = input[0];

// let t = 189;
let a, b, c;
for (a = 0; t >= 300; t -= 300) a += 1;
for (b = 0; t >= 60; t -= 60) b += 1;
for (c = 0; t >= 10; t -= 10) c += 1;
if (t > 0) console.log(-1);
else console.log(`${a} ${b} ${c}`);

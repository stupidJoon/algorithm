const fs = require('fs');

let [AB, C] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
C = Number(C);
let [A, B] = AB.split(' ').map((v) => Number(v));

let minutes = B + C;
A += Math.floor(minutes / 60);
minutes = minutes % 60;

if (A >= 24) A -= 24;

console.log(A + ' ' + minutes);
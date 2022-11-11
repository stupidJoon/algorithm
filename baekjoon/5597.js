const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const arr2 = Array.from({ length: 30 }, (_, k) => k + 1);

const diff = arr2.filter((v) => !arr.includes(v));

console.log(diff.sort((a, b) => a - b).join('\n'));

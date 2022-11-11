const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(Number);
const v = Number(input[2]);

console.log(arr.filter((val) => val === v).length);

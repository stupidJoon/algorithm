const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const arr = input.split('\n')[1].split(' ');

console.log(Number(arr.every((v) => v[0] === arr[0][0])));

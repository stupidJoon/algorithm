const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const result = arr.map((v) => `${v.at(0)}${v.at(-1)}`);

console.log(result.join('\n'));

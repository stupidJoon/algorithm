const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0]

let [before, ...after] = input.split('-');

before = before.split('+').map((val) => parseInt(val)).join('+');
after = after.join('+').split('+').map((val) => parseInt(val)).join('+');

console.log((eval(before) || 0) - (eval(after) || 0));

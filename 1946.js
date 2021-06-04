const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map((val) => val.split(' '));

console.log(input);

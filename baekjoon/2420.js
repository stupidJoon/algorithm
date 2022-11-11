const fs = require('fs');

const [N, M] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(Math.abs(N - M));

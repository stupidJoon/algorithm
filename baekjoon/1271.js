const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const [n, m] = input.split(' ').map(BigInt);

console.log((n / m).toString());
console.log((n % m).toString());

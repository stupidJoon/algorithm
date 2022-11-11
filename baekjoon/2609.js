const fs = require('fs');

let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((v) => Number(v));

if (a < b) [a, b] = [b, a];

const multiplication = a * b;

let temp = a % b;
a = b;
b = temp;

while (temp) {
  temp = a % b;
  a = b;
  b = temp;
}

console.log(a);
console.log(multiplication / a);

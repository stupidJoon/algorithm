const fs = require('fs');

const [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map((v) => Number(v));

let prize;

if (A === B && B === C) {
  prize = 10000 + A * 1000;
} else if (A === B) {
    prize = 1000 + A * 100;
} else if (B === C) {
    prize = 1000 + B * 100;
} else if (A === C) {
    prize = 1000 + A * 100;
} else {
    prize = Math.max(A, B, C) * 100;
}

console.log(prize);

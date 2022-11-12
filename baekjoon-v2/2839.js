const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

let five = Math.floor(N / 5);
let three = Math.floor((N - five * 5) / 3);

while (five * 5 + three * 3 !== N && five >= 0) {
  five -= 1;
  three = Math.floor((N - five * 5) / 3);
}

if (five >= 0) {
  console.log(five + three);
} else {
  console.log(-1);
}

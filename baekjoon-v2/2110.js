const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input.shift().split(' ').map(Number);
const arr = input.map(Number);

arr.sort((a, b) => a - b);

let left = 1;
let right = arr.at(-1);

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const count = countAP(mid);

  if (count < C) {
    right = mid - 1;
  }
  else {
    left = mid + 1;
  }
}

console.log(right);

function countAP(maxLen) {
  let count = 1;
  let prev = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] - prev < maxLen) continue;

    count += 1;
    prev = arr[i];
  }

  return count;
}

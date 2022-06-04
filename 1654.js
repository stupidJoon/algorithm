const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [K, N] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(Number);

let start = 1;
let end = Math.max(...arr);
let mid;
let answer;

while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const count = arr.reduce((acc, val) => acc + Math.floor(val / mid), 0);
    if (count >= N) {
        start = mid + 1;
        answer = mid;
    } else if (count < N) {
        end = mid - 1;
    }
}

console.log(answer);
const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = input[1].split(' ').map((value, index) => [Number(value), index]);

const result = Array(N);

arr.sort((a, b) => a[0] - b[0]);

result[arr[0][1]] = 0;

for (let i = 1; i < arr.length; i += 1) {
    const [value, index] = arr[i];
    if (value === arr[i - 1][0]) {
        result[index] = result[arr[i - 1][1]];
    } else {
        result[index] = result[arr[i - 1][1]] + 1;
    }
}

console.log(result.join(' '));
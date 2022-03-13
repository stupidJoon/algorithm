const fs = require('fs');

let [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map((v) => Number(v));

arr.sort((a, b) => a - b);

const sum = arr.reduce((acc, cur) => acc + cur);
const arithmeticMean = parseInt(sum / N);

const median = (N % 2) ? arr[Math.floor(N / 2)] : (arr[Math.floor(N / 2) - 1] + arr[Math.floor(N / 2)]) / 2;

const deduplicatedArr = [...new Set(arr)];
const valueAndFrequency = deduplicatedArr.map((value) => [value, arr.filter((v) => v === value).length]);
let maxFrequency = Number.MIN_SAFE_INTEGER;
for (value of valueAndFrequency) {
    if (value[1] > maxFrequency) maxFrequency = value[1];
}
const modeArr = valueAndFrequency.filter((value) => value[1] === maxFrequency).map((v) => v[0]);
modeArr.sort((a, b) => a - b);
const mode = (modeArr.length > 1) ? modeArr[1] : modeArr[0];

let [min, max] = [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
for (value of arr) {
    if (value < min) min = value;
    if (value > max) max = value;
}
const range = max - min;

console.log(`${arithmeticMean.toString()}\n${median}\n${mode}\n${range}`)
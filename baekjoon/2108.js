const fs = require('fs');

let [N, ...arr] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
N = Number(N);
arr = arr.map((v) => Number(v));

arr.sort((a, b) => a - b);

let sum = 0;
const map = new Map();
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let element of arr) {
    sum += element;

    if (!map.has(element)) {
        map.set(element, 1);
    } else {
        map.set(element, map.get(element) + 1);
    }

    if (element > max) max = element;
    if (element < min) min = element;
}

const mostFrequentValue = Math.max(...map.values());
const mostFrequentKeys = [...map.keys()].filter((v) => map.get(v) === mostFrequentValue);
let mostFrequent;
if (mostFrequentKeys.length === 1) {
    mostFrequent = mostFrequentKeys[0];
} else {
    mostFrequent = mostFrequentKeys[1];
}

console.log(Math.round(sum / arr.length) + 0);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(mostFrequent);
console.log(max - min);

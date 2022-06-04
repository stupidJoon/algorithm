const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, B] = input[0].split(' ').map(Number);
const arr = input.slice(1).flatMap((value) => value.split(' ').map(Number));

let lowestTime = [Number.MAX_SAFE_INTEGER, -1];

[...new Set(arr)].forEach((height) => {
    let time = 0;
    let availableBlocks = B;
    arr.map((value) => value - height).forEach((value) => {
        if (value < 0) {
            time += value * -1;
            availableBlocks -= value * -1;
        } else if (value > 0) {
            time += value * 2;
        }
    });
    if (availableBlocks < 0) return;
    if (time < lowestTime[0] && height > lowestTime[1]) {
        lowestTime = [time, height];
    }
});

console.log(lowestTime.join(' '));
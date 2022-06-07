const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M, B] = input.shift().split(' ').map(Number);
const arr = input.flatMap((value) => value.split(' ').map(Number));
const map = { };
arr.forEach((value) => {
    if (map[value]) map[value] += 1;
    else map[value] = 1;
});

let lowestTime = Number.MAX_SAFE_INTEGER
let lowestTimeHeight;

for (let height = 256; height >= 0; height -= 1) {
    let time = 0;
    let availableBlocks = B;
    Object.entries(map).forEach(([value, times]) => {
        const diff = value - height;
        availableBlocks += diff * times;
        if (diff < 0) {
            time += -diff * times;
        }
        if (diff > 0) {
            time += diff * 2 * times;
        }
    });
    if (availableBlocks < 0) continue;
    if (time > lowestTime) break;
    if (time < lowestTime) {
        lowestTime = time;
        lowestTimeHeight = height;
    }
}

console.log(`${lowestTime} ${lowestTimeHeight}`);
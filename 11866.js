const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = Array.from({ length: N }, (v, k) => k + 1);
const logs = [];

let pointer = 0;
for (let i = 0; i < N; i += 1) {
    pointer += K - 1;
    while (pointer >= arr.length) {
        pointer = pointer - arr.length;
    }
    logs.push(arr[pointer]);
    arr = [...arr.slice(0, pointer), ...arr.slice(pointer + 1)];
}

console.log(`<${logs.join(', ')}>`);
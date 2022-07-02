const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const nArr = input.slice(0, N);
const mArr = input.slice(N);

const map = {};

for (let i = 0; i < nArr.length; i += 1) {
    const [addr, pw] = nArr[i].split(' ');
    map[addr] = pw;
}

for (let i = 0; i < mArr.length; i += 1) {
    const addr = mArr[i];
    console.log(map[addr]);
}
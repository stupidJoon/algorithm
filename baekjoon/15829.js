const fs = require('fs');

function pow(x, y) {
    if (y === 0) return 1;
    return pow(x, y - 1) * x % 1234567891;
}

const [L, str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(str.split('').reduce((acc, val, index) => {
    return ((acc % 1234567891) + ((val.charCodeAt(0) - 96) * (pow(31, index) % 1234567891) % 1234567891) % 1234567891) % 1234567891;
}, 0) % 1234567891);
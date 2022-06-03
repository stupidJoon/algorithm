const fs = require('fs');

const [L, str] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(str.split('').reduce((acc, val, index) => {
    return acc + (val.charCodeAt(0) - 96) * Math.pow(31, index);
}, 0) % 1234567891);
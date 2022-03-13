const fs = require('fs');

const budda = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log(budda - 543);
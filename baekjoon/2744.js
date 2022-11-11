const fs = require('fs');

const word = fs.readFileSync('/dev/stdin').toString().trim();

const reversed = word.split('').map((v) => {
  if (v === v.toUpperCase()) {
    return v.toLowerCase();
  } else {
    return v.toUpperCase();
  }
}).join('');

console.log(reversed);

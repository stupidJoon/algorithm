const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i of input) {
  if (i === '0') break;
  const middle = Math.floor(i.length / 2);
  if (i.length % 2) {
    if (i.slice(0, middle) === i.slice(middle + 1).split('').reverse().join('')) {
      console.log('yes');
    } else {
      console.log('no');
    }
  } else {
    if (i.slice(0, middle) === i.slice(middle).split('').reverse().join('')) {
      console.log('yes');
    } else {
      console.log('no');
    }
  }
}

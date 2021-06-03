const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').slice(1, -1).map((val) => parseInt(val));

let maxWeight = 0;
input.forEach((n) => {
  const biggerRopeWeight = input.filter((val) => val >= n).length;
  if (maxWeight < n * biggerRopeWeight) maxWeight = n * biggerRopeWeight;
});
console.log(maxWeight);

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input.shift());

let line = 0;

for (let t = 0; t < T; t += 1) {
  const N = Number(input[line]);
  line += 1;
  if (N === 0) {
    console.log(0);
    continue;
  }
  const arr = input.slice(line, line + N).map(v => v.split(' '));
  line += N;
  const map = arr.reduce((acc, [clothes, category]) => {
    if (acc[category] === undefined) {
      acc[category] = [clothes];
    } else {
      acc[category].push(clothes);
    }
    return acc;
  }, {});
  console.log(
    Object.values(map).map(v => v.length + 1).reduce((acc, val) => acc * val) - 1
  );
}

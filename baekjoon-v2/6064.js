const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(v => v.split(' ').map(Number));

console.log(
  arr.map(([M, N, x, y]) => {
    let [mx, my] = [0, 0];
    for (let i = 1;; i += 1) {
      mx += 1;
      my += 1;
      if (mx > M) mx = 1;
      if (my > N) my = 1;
      console.log(mx, my)
      if (mx === x && my === y) return i;
      if (i > 1 && mx === 1 && my === 1) return -1;
    }
  }).join('\n')
);

// 0 -> 10 -> 2 -> 8 -> 4 -> 6
// 6 -> 4 -> 8 -> 2 -> 10 -> 0
// 2 4 6 8 10


// 0 -> 11 -> 2 -> 9 -> 4 -> 7
// thus
// N M x y
// abs(N - M) step arr ([0, 2, 4, 6, 8, 10])
// or 작은쪽 arr([11, 9, 7, 5, 3, 1])
// x - y가 arr에 includes돼야 값이 나옴 ok?

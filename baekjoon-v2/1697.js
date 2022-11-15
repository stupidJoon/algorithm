const fs = require('fs');

const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const queue = [N];
const times = { [N]: 0 };

while (queue[0] !== K) {
  const n = queue.shift();
  const time = times[n];

  const available = [n - 1, n + 1, n * 2]
                      .filter((v) => times[v] === undefined)
                      .filter((v) => v >= 0 && v <= 100000);

  available.forEach((v) => times[v] = time + 1);

  queue.push(...available);
}

console.log(times[queue[0]]);

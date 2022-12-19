const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const logs = [];

for (let i = 1; i < arr.length; i += 1) {
  const [A, B] = arr[i].split(' ').map(Number);
  const queue = [[A, '']];
  const isVisited = Array(10000).fill(false);

  while (queue.length > 0) {
    const [n, commands] = queue.shift();

    if (n === B) {
      logs.push(commands);
      break;
    }

    const nextD = D(n)
    if (isVisited[nextD] === false) {
      isVisited[nextD] = true;
      queue.push([nextD, commands + "D"]);
    }

    const nextS = S(n)
    if (isVisited[nextS] === false) {
      isVisited[nextS] = true;
      queue.push([nextS, commands + "S"]);
    }

    const nextL = L(n)
    if (isVisited[nextL] === false) {
      isVisited[nextL] = true;
      queue.push([nextL, commands + "L"]);
    }

    const nextR = R(n)
    if (isVisited[nextR] === false) {
      isVisited[nextR] = true;
      queue.push([nextR, commands + "R"]);
    }
  }
}

console.log(logs.join('\n'));

function D(n) {
  return (n * 2) % 10000;
}
function S(n) {
  return (n === 0) ? 9999 : n - 1;
}
function L(n) {
  return (n % 1000) * 10 + Math.floor(n / 1000);
}
function R(n) {
  return (n % 10) * 1000 + Math.floor(n / 10);
}

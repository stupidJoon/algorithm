const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];

const TPArr = input.slice(1).map((TP) => TP.split(' ').map(Number));

function f(n) {
    if (n + TPArr[n - 1][0] - 1 > N) return 0;
    const availableNodes = Array.from({ length: n - 1 }, (v, k) => k + 1)
        .filter((value, index) => index + 1 + TPArr[value - 1][0] - 1 < n)
        .map((value) => f(value));
    if (availableNodes.length === 0) return TPArr[n - 1][1];
    return Math.max(
        ...availableNodes
    ) + TPArr[n - 1][1];
}

console.log(Math.max(...Array.from({ length: N }, (v, k) => k + 1).map(f)));
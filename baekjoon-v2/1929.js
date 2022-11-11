const [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

let arr = Array.from({ length: M - N + 1 }, (_, k) => true);
// arr[N - N] = arr[0]
// arr[M - N] = arr[13]

if (N === 1) {
    arr[0] = false;
}

for (let i = 2; i <= M; i += 1) {
    if (arr[i - N] === false) continue;
    for (let j = i; j <= M; j += i) {
        if (j < N) continue;
        if (i === j) continue;
        arr[j - N] = false;
    }
}

console.log(arr.flatMap((v, i) => (v) ? [i + N] : []).join('\n'));
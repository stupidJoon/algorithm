const fs = require('fs');
const [T, ...lines] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr;
let M, N, K;
let X , Y;
let baseIndex;

lines.forEach((line, index) => {
    if (line.split(' ').length === 3) {
        // if 10 8 7 or 10 10 1
        [M, N, K] = line.split(' ').map(Number);
        arr = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));
        baseIndex = index;
        return;
    }
    if (line.split(' ').length === 2) {
        // if 0 0 or 0 1 ...
        [X, Y] = line.split(' ').map(Number);
        arr[Y][X] = 1;
        if (index === baseIndex + K) {
            // need to compute dfs
            const worms = compute();
            console.log(worms);
        }
        return;
    }
    
});

function compute() {
    let worm = 0;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr[0].length; j += 1) {
            if (arr[i][j] === 1) {
                dfs(i, j);
                worm += 1;
            }
        }
    }
    return worm;
}

function dfs(i, j) {
    arr[i][j] = 2;
    if (i - 1 >= 0 && arr[i - 1][j] === 1) {
        dfs(i - 1, j);
    }
    if (j - 1 >= 0 && arr[i][j - 1] === 1) {
        dfs(i , j - 1);
    }
    if (i + 1 < arr.length && arr[i + 1][j] === 1) {
        dfs(i + 1 , j);
    }
    if (j + 1 < arr[0].length && arr[i][j + 1] === 1) {
        dfs(i , j + 1);
    }
}
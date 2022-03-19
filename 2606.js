const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(2);

const obj = input.reduce((acc, val) => {
    const [src, dst] = val.split(' ').map((v) => Number(v));
    if (acc[src]) {
        acc[src] = new Set([...acc[src], dst]);
    } else {
        acc[src] = new Set([dst]);
    }
    if (acc[dst]) {
        acc[dst] = new Set([...acc[dst], src]);
    } else {
        acc[dst] = new Set([src]);
    }
    return acc;
}, {});

let marked = [];

function dfs(cur) {
    if (marked.includes(cur)) return 0;
    marked = [...marked, cur];

    if (!obj[cur]) return 1;

    const availableNodes = [...obj[cur]];

    if (availableNodes.length === 0) return 1;

    return availableNodes.reduce((acc, val) => acc + dfs(val), 0) + 1;
}

console.log(dfs(1) - 1);
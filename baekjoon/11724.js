const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const uvArr = input.slice(1).map((uv) => uv.split(' ').map(Number));

const map = Array.from({ length: N }, (v, k) => k + 1).reduce((acc, val) => ({ ...acc, [val]: [] }), {});

uvArr.forEach(([u, v]) => {
    if (!map[u].includes(v)) {
        map[u].push(v);
    }
    if (!map[v].includes(u)) {
        map[v].push(u);
    }
});


const isVisited = Array(N).fill(0)

function dfs(node) {
    isVisited[node - 1] = 1;
    const availableNodes = map[node];
    availableNodes.forEach((availableNode) => {
        if (isVisited[availableNode - 1]) return;
        dfs(availableNode);
    });
}

let count = 0;

Array.from({ length: N }, (v, i) => i + 1).forEach((node) => {
    if (isVisited[node - 1]) return;
    dfs(node);
    count += 1;
});

console.log(count);
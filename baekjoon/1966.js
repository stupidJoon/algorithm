const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

for (let i = 0; i < input.length / 2; i += 1) {
    const [N, M] = input[i * 2].split(' ').map(Number);
    const target = String.fromCharCode('A'.charCodeAt(0) + M);
    const queue = input[i * 2 + 1].split(' ').map((value, index) => [String.fromCharCode('A'.charCodeAt(0) + index), Number(value)]);
    while (queue.length > 0) {
        const maxPriority = Math.max(...queue.map((value) => value[1]));
        if (queue[0][1] === maxPriority) {
            if (queue[0][0] === target) break;
            queue.shift();
        } else {
            queue.push(queue.shift());
        }
    }
    console.log(N - queue.length + 1);
}
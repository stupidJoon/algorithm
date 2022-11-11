const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();
const [n, ...arr] = input.split('\n');

let base = 1;
const queue = [];
const logs = [];

arr.map(Number).forEach((element) => {
    if (queue.length > 0 && element === queue[queue.length - 1]) {
        queue.pop();
        logs.push('-');
        return;
    }
    if (element < base) {
        console.log('NO');
        process.exit(0);
    }
    if (element >= base) {
        for (let i = base; i <= element; i += 1) {
            queue.push(i);
            base += 1;
            logs.push('+');
        }
        queue.pop();
        logs.push('-');
        return;
    }
    
});

console.log(logs.join('\n'));
const fs = require('fs');

const array = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function f(arr, result) {
    for (let i = 0; i < arr.length; i += 1) {
        const temp = [...result, arr[i]];
        if (temp.length === 7 && temp.reduce((acc, val) => acc + val) === 100) {
            temp.sort((a, b) => a - b);
            console.log(temp.join('\n'));
            process.exit(0);
        }
        f(arr.slice(i + 1), temp);
    }
}

f(array, []);
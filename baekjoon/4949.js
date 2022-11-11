const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(0, -1);

input.forEach((line) => {
    const str = line.slice(0, -1);
    const stack = [];
    let isBalanced = [...str].every((ch) => {
        if (ch === '[' || ch === '(') {
            stack.push(ch);
        } else if (ch === ']') {
            const top = stack.pop();
            if (top !== '[') return false;
        } else if (ch === ')') {
            const top = stack.pop();
            if (top !== '(') return false;
        }
        return true;
    });
    if (stack.length !== 0) isBalanced = false;
    console.log(isBalanced ? 'yes' : 'no');
});
const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

let s = new Set();

arr.forEach((line) => {
    let [instruction, operand] = line.split(' ');
    operand = Number(operand);

    ({
        add: () => {
            s.add(operand);
        },
        remove: () => {
            s.delete(operand);
        },
        check: () => {
            console.log(Number(s.has(operand)));
        },
        toggle: () => {
            if (s.has(operand)) {
                s.delete(operand);
            } else {
                s.add(operand);
            }
        },
        all: () => {
            s = new Set(Array.from({ length: 20 }, (_, k) => k + 1));
        },
        empty: () => {
            s = new Set();
        }
    })[instruction]();
});
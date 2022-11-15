const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const stack = [];

const log = [];

arr.forEach((value) => {
  let [opcode, operand] = value.split(' ');

  operand = Number(operand);

  ({
    push: () => {
      stack.push(operand);
    },
    pop: () => {
      log.push(stack.pop() ?? -1);
    },
    size: () => {
      log.push(stack.length);
    },
    empty: () => {
      log.push(Number(stack.length === 0));
    },
    top: () => {
      log.push(stack.at(-1) ?? -1);
    },
  })[opcode]();
});

console.log(log.join('\n'));

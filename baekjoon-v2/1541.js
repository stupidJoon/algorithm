const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim();

// Better Ver.
const [positive, ...negatives] = input.split('-');

console.log(
  [
    ...Array.from(positive.matchAll(/\d+/g)).map((v) => Number(v[0])),
    ...negatives.flatMap((negative) => Array.from(negative.matchAll(/\d+/g)).map((v) => -Number(v[0])))
  ].reduce((acc, v) => acc + v)
)

// const operators = input.split(/\d/g).filter((v) => v !== '');

// const operands = Array.from(input.matchAll(/\d+/g)).map((v) => Number(v[0]));

// let sum = operands[0] ?? 0;
// let stack = 0;

// for (let i = 1; i < operands.length; i += 1) {
//   const operator = operators[i - 1];
//   const operand = operands[i]

//   if (operator === '+') {
//     if (stack < 0) {
//       stack -= operand;
//     } else {
//       sum += operand;
//     }
//   } else {
//     if (stack < 0) {
//       sum += stack;
//       stack = -operand;
//     } else {
//       stack -= operand;
//     }
//   }
// }

// sum += stack;

// console.log(sum);

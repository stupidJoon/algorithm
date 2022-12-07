const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift());
const setA = new Set(input.shift().split(' ').map(Number));
const M = Number(input.shift());
const arr = input.shift().split(' ').map(Number);

console.log(arr.map(
  n => Number(setA.has(n)
)).join('\n'));
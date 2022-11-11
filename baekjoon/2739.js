const fs = require('fs');

const n = Number(fs.readfilesync('/dev/stdin').toString().trim());

for (let i = 1; i <= 9; i += 1) {
  console.log(`${n} * ${i} = ${n * i}`);
}
const fs = require('fs');
const [n, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');
const meetings = input.map((val) => val.split(' ').map((val2) => parseInt(val2))).filter((val) => !isNaN(val[0]));

meetings.sort((a, b) => (a[1] - b[1] === 0) ? (a[0] - b[0]) : (a[1] - b[1]));

let nowTime = 0;
let cnt = 0;
let flag = true;
while (flag) {
  let i;
  for (i = 0; i < meetings.length; i++) {
    const meeting = meetings[i];
    if (meeting[0] >= nowTime) {
      cnt += 1;
      nowTime = meeting[1];
      meetings.splice(i, 1);
      break;
    }
  }
  if (i === meetings.length) flag = false;
}
console.log(cnt);

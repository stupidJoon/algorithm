class AC {
  constructor() {
    this.obj = {}
    this.start = 0;
    this.end = 0;
    this.reversed = false;
    this.error = false;
  }

  push(v) {
    this.obj[this.end] = v;
    this.end += 1;
  }

  shift() {
    if (this.end - this.start < 1) this.error = true;
    if (this.reversed) this.end -= 1;
    else this.start += 1;
  }

  reverse() {
    this.reversed = !this.reversed;
  }

  *iterable() {
    if (this.reversed) {
      for (let i = this.end - 1; i >= this.start; i -= 1) {
        yield this.obj[i];
      }
    } else {
      for (let i = this.start; i < this.end; i += 1) {
        yield this.obj[i];
      }
    }
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

for (let i = 0; i < input.length; i += 3) {
  const commands = input[i].split('');
  const n = Number(input[i + 1]);
  const arr = input[i + 2].slice(1, -1).split(',').map(Number);
  const ac = new AC();

  if (n > 0) {
    for (let j = 0; j < arr.length; j += 1) {
      ac.push(arr[j])
    }
  }

  for (let j = 0; j < commands.length; j += 1) {
    if (commands[j] === 'R') ac.reverse();
    if (commands[j] === 'D') ac.shift();
  }

  if (ac.error) {
    console.log('error');
    continue;
  }

  console.log(`[${[...ac.iterable()].join(',')}]`);
}


class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  
  size() {
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.rear + 1;
    }
  }
  
  add(value) {
    if (this.size() === 0) {
      this.storage['0'] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  
  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return temp;
  }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, H] = input.shift().split(' ').map(Number);
const arr = [];

for (let i = 0; i < H; i += 1) {
  arr.push(
    input
      .slice(N * i, N * (i + 1))
      .map(v => v.split(' ').map(Number))
  );
}

// [H, N, M, day]
const queue = arr.flatMap(
  (array3D, h) => array3D.flatMap(
    (array2D, n) => array2D.flatMap(
      (v, m) => (v === 1) ? [[h, n, m, 0]] : []
    )
  )
);

const q = new Queue();
queue.forEach(v => q.add(v));

let lastDay = 0;

while (q.size() > 0) {
  const [h, n, m, day] = q.popleft();

  [[-1, 0, 0], [1, 0, 0], [0, 0, -1], [0, -1, 0], [0, 0, 1], [0, 1, 0]]
    .map(([vh, vn, vm]) => [h + vh, n + vn, m + vm])
    .filter(([vh, vn, vm]) => (vh >= 0 && vh < H) && (vn >= 0 && vn < N) && (vm >= 0 && vm < M))
    .filter(([vh, vn, vm]) => arr[vh][vn][vm] === 0)
    .forEach(([vh, vn, vm]) => {
      arr[vh][vn][vm] = 1;
      q.add([vh, vn, vm, day + 1]);
    });

  lastDay = day;
}

if (arr.some(array2D => array2D.some(array => array.some(v => v === 0)))) {
  console.log(-1);
} else {
  console.log(lastDay)
}
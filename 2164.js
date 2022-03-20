const fs = require('fs');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.front = node;
    } else {
      this.back.next = node;
    }
    this.back = node;
    this.length += 1;
  }
  dequeue() {
    if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    queue.length -= 1;
  }
}

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const queue = new Queue();

for (let i = 1; i <= N; i += 1) {
  queue.enqueue(i);
}

while (queue.length > 1) {
  queue.dequeue();
  queue.enqueue(queue.front.value);
  queue.dequeue();
}

console.log(queue.front.value);

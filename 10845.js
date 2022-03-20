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
    if (this.length === 0) return;
    if (this.length === 1) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
    }
    queue.length -= 1;
  }
}

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const queue = new Queue();

const log = [];

for (const command of input) {
  [operation, operand] = command.split(' ');
  if (operation === 'push') {
    queue.enqueue(operand);
  } else if (operation === 'pop') {
    const frontNode = queue.front;
    if (frontNode) {
      log.push(queue.front.value)
      queue.dequeue();
    } else {
      log.push(-1);
    }
  } else if (operation === 'size') {
    log.push(queue.length);
  } else if (operation === 'empty') {
    log.push(Number(queue.length === 0));
  } else if (operation === 'front') {
    if (queue.front) {
      log.push(queue.front.value);
    } else {
      log.push(-1);
    }
  } else if (operation === 'back') {
    if (queue.back) {
      log.push(queue.back.value);
    } else {
      log.push(-1);
    }
  }
}

console.log(log.join('\n'));


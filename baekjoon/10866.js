class Node {
    constructor(value, previous, next) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class Deque {
    constructor() {
        this.size = 0;
        this.front = null;
        this.back = null;
    }
    push_front(x) {
        const node = new Node(x, null, this.front);
        if (this.front) this.front.previous = node;
        this.front = node;
        if (!this.back) this.back = node;
        this.size += 1;
    }
    push_back(x) {
        const node = new Node(x, this.back, null);
        if (this.back) this.back.next = node;
        if (!this.front) this.front = node;
        this.back = node;
        this.size += 1;
    }
    pop_front() {
        if (this.size === 0) return -1;
        const node = this.front;
        this.front = this.front.next;
        if (this.front) this.front.previous = null;
        this.size -= 1;
        if (this.size === 0) this.back = null;
        return node.value;
    }
    pop_back() {
        if (this.size === 0) return -1;
        const node = this.back;
        this.back = this.back.previous;
        if (this.back) this.back.next = null;
        this.size -= 1;
        if (this.size === 0) this.front = null;
        return node.value;
    }
}

const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

const d = new Deque();
const logs = [];

input.forEach((line) => {
    const [operator, operand] = line.split(' ');
    ({
        push_front: () => {
            d.push_front(operand);
        },
        push_back: () => {
            d.push_back(operand);
        },
        pop_front: () => {
            logs.push(d.pop_front());
        },
        pop_back: () => {
            logs.push(d.pop_back());
        },
        size: () => {
            logs.push(d.size);
        },
        empty: () => {
            logs.push(Number(d.size === 0));
        },
        front: () => {
            logs.push(d.front?.value ?? -1);
        },
        back: () => {
            logs.push(d.back?.value ?? -1);
        }
    })[operator]();
});

console.log(logs.join('\n'));
class MinHeap {
    constructor() {
        this.arr = [];
    }
    insert(n) {
        this.arr.push(n);
        for (let i = this.arr.length - 1; i > 0; i = Math.floor(i / 2)) {
            const parent = Math.floor(i / 2);
            if (this.arr[i] < this.arr[parent]) {
                [this.arr[i], this.arr[parent]] = [this.arr[parent], this.arr[i]];
            } else {
                break;
            }
        }
    }
    remove() {
        const root = this.arr[0];
        
        if (this.arr.length === 0) {
            return 0;
        }
        if (this.arr.length === 1) {
            this.arr.pop();
            return root;
        }
        if (this.arr.length === 2) {
            this.arr[0] = this.arr.pop();
            return root;
        }

        this.arr[0] = this.arr.pop();
        for (let i = 2; i < this.arr.length + 1;) {
            const parent = this.arr[i / 2 - 1];
            const children = [this.arr[i - 1], this.arr[i]];
            if (children.every((v) => v < parent)) {
                // children both smaller
                if (children[0] < children[1] || children[1] === undefined) {
                    // left smaller
                    [this.arr[i / 2 - 1], this.arr[i - 1]] = [this.arr[i - 1], this.arr[i / 2 - 1]];
                    i *= 2;
                } else {
                    // right smaller
                    [this.arr[i / 2 - 1], this.arr[i]] = [this.arr[i], this.arr[i / 2 - 1]];
                    i = (i + 1) * 2;
                }
            }
            else if (children[0] < parent) {
                // left children smaller
                [this.arr[i / 2 - 1], this.arr[i - 1]] = [this.arr[i - 1], this.arr[i / 2 - 1]];
                i *= 2;

            }
            else if (children[1] < parent) {
                // right children smaller
                [this.arr[i / 2 - 1], this.arr[i]] = [this.arr[i], this.arr[i / 2 - 1]];
                i = (i + 1) * 2;
            } else {
                break;
            }
        }
        return root;
    }
}

const h = new MinHeap();

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
if (input === 0) process.exit();

console.log(
    require('fs')
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map(Number)
    .flatMap((v) => {
        if (v === 0) {
            return [h.remove()];
        } else {
            h.insert(v);
            return [];
        }
    })
    .join('\n')
)
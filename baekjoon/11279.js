class MaxHeap {
    constructor() {
        this.arr = [Number.MAX_SAFE_INTEGER];
    }
    
    insert(n) {
        const arr = this.arr;
        arr.push(n)
        for (let i = arr.length - 1; arr[i] > arr[Math.floor(i / 2)]; i = Math.floor(i / 2)) {
            [arr[i], arr[Math.floor(i / 2)]] = [arr[Math.floor(i / 2)], arr[i]];
        }
    }

    remove() {
        const arr = this.arr;
        const root = arr[1];
        
        if (arr.length === 1) {
            return 0;
        }
        if (arr.length === 2) {
            return arr.pop();
        }

        arr[1] = arr.pop();

        for (let i = 1; arr[i] < arr[i * 2] || arr[i] < arr[i * 2 + 1];) {
            if (arr[i * 2 + 1] === undefined || arr[i * 2] > arr[i * 2 + 1]) {
                [arr[i], arr[i * 2]] = [arr[i * 2], arr[i]];
                i = i * 2;
            } else {
                [arr[i], arr[i * 2 + 1]] = [arr[i * 2 + 1], arr[i]];
                i = i * 2 + 1;
            }
        }

        return root;
    }
}

const h = new MaxHeap();

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
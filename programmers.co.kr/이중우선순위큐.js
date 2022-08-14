class MinHeap {
    constructor() {
        this.arr = [Number.MIN_SAFE_INTEGER];
    }
    
    empty() {
        return this.arr.length === 1;
    }
    top() {
        return this.arr[1];
    }

    insert(n) {
        const arr = this.arr;
        arr.push(n)
        for (let i = arr.length - 1; arr[i] < arr[Math.floor(i / 2)]; i = Math.floor(i / 2)) {
            [arr[i], arr[Math.floor(i / 2)]] = [arr[Math.floor(i / 2)], arr[i]];
        }
    }

    remove() {
        const arr = this.arr;
        const root = arr[1];
        
        if (arr.length === 1) {
            return undefined;
        }
        if (arr.length === 2) {
            return arr.pop();
        }

        arr[1] = arr.pop();

        for (let i = 1; arr[i] > arr[i * 2] || arr[i] > arr[i * 2 + 1];) {
            if (arr[i * 2 + 1] === undefined || arr[i * 2] < arr[i * 2 + 1]) {
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

class MaxHeap {
    constructor() {
        this.arr = [Number.MAX_SAFE_INTEGER];
    }

    empty() {
        return this.arr.length === 1;
    }
    top() {
        return this.arr[1];
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
            return undefined;
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
                i = i * 2 + 1;s
            }
        }

        return root;
    }
}

function solution(operations) {
    const minH = new MinHeap();
    const maxH = new MaxHeap();
    const map = {};
    for (let i = 0; i < operations.length; i += 1) {
        let [ch, n] = operations[i].split(' ');
        n = Number(n);

        if (ch === 'I') {
            minH.insert(n);
            maxH.insert(n);
            map[n] = (map[n]) ? map[n] + 1 : 1;
        } else {
            if (n === 1) {
                while (!maxH.empty()) {
                    const max = maxH.remove();
                    if (map[max] > 0) {
                        map[max] -= 1;
                        break;
                    }
                }
            } else {
                while (!minH.empty()) {
                    const min = minH.remove();
                    if (map[min] > 0) {
                        map[min] -= 1;
                        break;
                    }
                }
            }
        }
    }

    while (!minH.empty() && !(map[minH.top()] > 0)) {
        minH.remove();
    }
    while (!maxH.empty() && !(map[maxH.top()] > 0)) {
        maxH.remove();
    }

    if (minH.empty() || maxH.empty()) {
        return [0, 0];
    } else {
        return [maxH.top(), minH.top()]
    }
}
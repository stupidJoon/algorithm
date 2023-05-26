function solution(queue1, queue2) {
    const Q1 = new Queue(queue1);
    const Q2 = new Queue(queue2);
    
    for (let count = 0; count <= queue1.length * 2; count += 1) {
        if (Q1.sum === Q2.sum) return count;
        
        if (Q1.sum > Q2.sum) {
            Q2.insert(Q1.pop());
        } else {
            Q1.insert(Q2.pop());
        }
    }
    
    return -1;
}

class Queue {
    constructor(array) {
        this.arr = [...array];
        this.start = 0;
        this.sum = this.arr.reduce((acc, v) => acc + v);
    }
    pop() {
        this.sum -= this.arr[this.start];
        this.start += 1;
        return this.arr[this.start - 1];
    }
    insert(n) {
        this.sum += n;
        this.arr.push(n);
    }
}
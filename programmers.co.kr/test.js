function solution(n, roads, sources, destination) {
    const map = roads.reduce((acc, [v1, v2]) => {
        acc[v1] = acc[v1] ? [...acc[v1], v2] : [v2];
        acc[v2] = acc[v2] ? [...acc[v2], v1] : [v1];
        return acc;
    }, {});

    return sources.map((source) => {
        const queue = new Queue();
        queue.add(source);
        const times = Array.from({ length: n + 1 }, () => 0);
        times[source] = 0;

        while (queue.size() > 0) {
            console.log(times)
            const node = queue.popleft();
            const time = times[node];

            if (node === destination) return time;
            
            (map[node] ?? [])
                .filter(n => times[n] === 0)
                .forEach(n => {
                    times[n] = time + 1;
                    queue.add(n);
                });
        }

        return -1;
    });
}

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
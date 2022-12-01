const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1);

const heap = [-1];

function insert(n) {
  heap.push(n);

  let child = heap.length - 1;
  let parent = Math.floor(child / 2);

  while (parent > 0) {
    if (heap[parent] <= heap[child]) break;
    [heap[parent], heap[child]] = [heap[child], heap[parent]];

    child = parent;
    parent = Math.floor(child / 2);
  }
}

function remove() {
  if (heap.length === 1) return 0;
  if (heap.length === 2) return heap.pop();

  const min = heap[1];
  heap[1] = heap.pop();

  let parent = 1;

  while (parent * 2 < heap.length) {
    const left = parent * 2;
    const right = parent * 2 + 1;

    if (heap[right] === undefined && heap[parent] <= heap[left]) break;
    if (heap[parent] <= heap[left] && heap[parent] <= heap[right]) break;

    if (heap[left] < heap[right] || heap[right] === undefined) {
      [heap[parent], heap[left]] = [heap[left], heap[parent]];
      parent = left;
    } else {
      [heap[parent], heap[right]] = [heap[right], heap[parent]];
      parent = right;
    }
  }

  return min;
}

console.log(
  arr
    .map((x) => {
      if (x === 0) return remove();
      insert(x);
    })
    .filter((v) => v !== undefined)
    .join('\n')
);

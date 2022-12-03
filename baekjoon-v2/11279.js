const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1);

const heap = [0];

function insert(n) {
  heap.push(n);

  let child = heap.length - 1;
  let parent = Math.floor(child / 2);

  while (parent > 0) {
    if (heap[parent] < heap[child]) {
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
    } else {
      break;
    }

    child = parent;
    parent = Math.floor(child / 2);
  }
}

function remove() {
  if (heap.length === 1) return 0;
  if (heap.length === 2) return heap.pop();

  const max = heap[1];

  heap[1] = heap.pop();

  let parent = 1;
  let left = parent * 2;
  let right = parent * 2 + 1;
  
  while (left < heap.length) {
    const maxChild = (heap[left] > (heap[right] ?? 0)) ? left : right;

    if (heap[parent] < heap[maxChild]) {
      [heap[parent], heap[maxChild]] = [heap[maxChild], heap[parent]];
    } else {
      break;
    }

    parent = maxChild;
    left = parent * 2;
    right = parent * 2 + 1;
  }

  return max;
}

console.log(
  arr
    .map((x) => {
      if (x === 0) return remove();
      insert(x);
    })
    .filter((x) => x !== undefined)
    .join('\n')
);
const heap = [0];

function abs(x) {
  return Math.abs(x);
}

function push(v) {
  let child = heap.length;
  let parent = Math.floor(child / 2);

  heap.push(v);

  while (parent > 0) {
    if (abs(heap[parent]) < abs(heap[child])) break;
    if (abs(heap[parent]) === abs(heap[child]) && heap[parent] < heap[child]) break;

    [heap[parent], heap[child]] = [heap[child], heap[parent]];

    child = parent;
    parent = Math.floor(child / 2);
  }
}

function pop() {
  if (heap.length === 1) return 0;
  if (heap.length === 2) return heap.pop();

  const v = heap[1];
  heap[1] = heap.pop();

  let parent = 1;
  let left = parent * 2;
  let right = parent * 2 + 1;

  while (left < heap.length) {
    if (abs(heap[parent]) < abs(heap[left]) && abs(heap[parent]) < abs(heap[right] ?? Number.MAX_SAFE_INTEGER)) break;
    if (abs(heap[parent]) === abs(heap[left]) && heap[parent] < heap[left]) break;
    if (heap[right] && abs(heap[parent]) === abs(heap[right]) && heap[parent] < heap[right]) break;

    if (heap[right] === undefined) {
      [heap[parent], heap[left]] = [heap[left], heap[parent]];
      parent = left;
    }
    else if (abs(heap[parent]) > abs(heap[left]) && abs(heap[parent]) > abs(heap[right])) {
      if (abs(heap[left]) === abs(heap[right])) {
        if (heap[left] < heap[right]) {
          [heap[parent], heap[left]] = [heap[left], heap[parent]];
          parent = left;
        } else {
          [heap[parent], heap[right]] = [heap[right], heap[parent]];
          parent = right;
        }
      }
      else if (abs(heap[left]) < abs(heap[right])) {
        [heap[parent], heap[left]] = [heap[left], heap[parent]];
        parent = left;
      }
      else {
        [heap[parent], heap[right]] = [heap[right], heap[parent]];
        parent = right;
      }
    }
    else if (abs(heap[parent]) > abs(heap[left])) {
      [heap[parent], heap[left]] = [heap[left], heap[parent]];
      parent = left;
    }
    else {
      [heap[parent], heap[right]] = [heap[right], heap[parent]];
      parent = right;
    }

    left = parent * 2;
    right = parent * 2 + 1
  }

  return v;
}

const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

arr.forEach(v => {
  if (v === 0) {
    console.log(pop());
  } else {
    push(v);
  }
});

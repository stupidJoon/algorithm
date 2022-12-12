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
    const parentABS = abs(heap[parent]);
    const leftABS = abs(heap[left]);
    const rightABS = abs(heap[right])

    if (
      (
        heap[right] === undefined ||
        leftABS === rightABS && heap[left] <= heap[right] ||
        leftABS < rightABS
      ) &&
      (
        parentABS > leftABS ||
        parentABS === leftABS && heap[parent] > heap[left]
      )
    ) {
      [heap[parent], heap[left]] = [heap[left], heap[parent]];
      parent = left;
    }
    else if (
      (
        leftABS === rightABS && heap[left] > heap[right] ||
        leftABS > rightABS
      ) &&
      (
        parentABS > rightABS ||
        parentABS === rightABS && heap[parent] > heap[right]
      )
    ) {
      [heap[parent], heap[right]] = [heap[right], heap[parent]];
      parent = right;
    } else break;

    left = parent * 2;
    right = parent * 2 + 1;
  }

  return v;
}

const fs = require('fs');

const arr = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

console.log(arr.reduce(
  (acc, v) => {
    if (v === 0) acc.push(pop());
    else push(v);
    return acc;
  }, []
).join('\n'));

/*
parent left 바꾸는 조건
01. right === undefined or
02. abs(left) === abs(right) && heap[left] <= heap[right] or
03. abs(left) < abs(right) 일때

1. abs(parent) > abs(left) or
2. abs(parent) === abs(left) && parent > left 일때

swab(parent, left)
*/

/*
parent right 바꾸는 조건
01. abs(left) === abs(right) && heap[left] > heap[right] or
02. abs(left) > abs(right) 일때

1. abs(parent) > abs(right) or
2. abs(parent) === abs(right) && parent > right 일때

swab(parent, right)
*/

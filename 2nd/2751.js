const array = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

// [1, 2, 3, 4] => [1, 2] [3, 4]
// [1, 2, 3, 4, 5] => [1, 2] [3, 4, 5]
function divide(arr) {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

function merge(left, right) {
  let result = [];
  let [i, j] = [0, 0]
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }
  result = result.concat(left.slice(i));
  result = result.concat(right.slice(j));
  return result;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const [left, right] = divide(arr);
  return merge(mergeSort(left), mergeSort(right));
}


// [5, 4, 3, 2, 1] => [5, 4] [3, 2, 1] => ([5] [4]) ([3 2] [1]) => ([5] [4]) (([3] [2]) [1])
// ([5] [4]) (([3] [2]) [1]) => ([5] [4]) ([2, 3] [1]) => [4, 5] [1, 2, 3] => [1, 2, 3, 4, 5]

console.log(mergeSort(array).join('\n'));


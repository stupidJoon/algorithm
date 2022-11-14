const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

function merge(arr1, arr2) {
  let result = [];
  let [l, r] = [0, 0];

  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      result.push(arr1[l]);
      l += 1;
    } else {
      result.push(arr2[r]);
      r += 1;
    }
  }

  result.push(...arr1.slice(l));
  result.push(...arr2.slice(r));

  // memory exceeded
  // while (l < arr1.length && r < arr2.length) {
  //   if (arr1[l] < arr2[r]) {
  //     result = [...result, arr1[l]];
  //     l += 1;
  //   } else {
  //     result = [...result, arr2[r]];
  //     r += 1;
  //   }
  // }

  // result = [
  //   ...result,
  //   ...arr1.slice(l),
  //   ...arr2.slice(r),
  // ]

  return result;
}

function split(arr) {
  const mid = Math.floor(arr.length / 2);

  if (mid === 0) return arr;

  return merge(
    split(arr.slice(0, mid)),
    split(arr.slice(mid)),
  );
}

const result = split(input);

console.log(result.join('\n'));

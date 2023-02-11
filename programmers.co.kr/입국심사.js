function solution(n, times) {
  let left = 1;
  let right = Math.max(...times) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midTimes = times.reduce((acc, v) => acc + Math.floor(mid / v), 0);

    if (midTimes < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

solution(6, [7, 10]);

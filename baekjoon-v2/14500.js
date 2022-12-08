const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map(row => row.split(' ').map(Number));

let max = 0;
for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < M; j += 1) {
    max = Math.max(
      max,
      t1_0(i, j),
      t1_90(i, j),
      t2(i, j),
      t3_0(i, j),
      t3_90(i, j),
      t3_180(i, j),
      t3_270(i, j),
      t3_flip0(i, j),
      t3_flip90(i, j),
      t3_flip180(i, j),
      t3_flip270(i, j),
      t4_0(i, j),
      t4_90(i, j),
      t4_flip0(i, j),
      t4_flip90(i, j),
      t5_0(i, j),
      t5_90(i, j),
      t5_180(i, j),
      t5_270(i, j),
    );
  }
}

console.log(max);

function t1_0(i, j) {
  if (j + 3 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i][j + 3];
}
function t1_90(i, j) {
  if (i + 3 >= N) return -1;
  return arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 3][j];
}

function t2(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i + 1][j] + arr[i + 1][j + 1];
}

function t3_0(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j] + arr[i + 1][j] + arr[i + 2][j] + arr[i + 2][j + 1];
}
function t3_90(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2] + arr[i][j + 2];
}
function t3_180(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1];
}
function t3_270(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i + 1][j] + arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
}
function t3_flip0(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j + 1] + arr[i][j] + arr[i + 1][j] + arr[i + 2][j];
}
function t3_flip90(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 2];
}
function t3_flip180(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 2][j + 1] + arr[i + 2][j];
}
function t3_flip270(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
}

function t4_0(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j + 1];
}
function t4_90(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i + 1][j] + arr[i + 1][j + 1] + arr[i][j + 1] + arr[i][j + 2];
}
function t4_flip0(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j] + arr[i + 2][j];
}
function t4_flip90(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j + 2];
}

function t5_0(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i][j] + arr[i][j + 1] + arr[i + 1][j + 1] + arr[i][j + 2];
}
function t5_90(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j] + arr[i + 1][j] + arr[i + 1][j + 1] + arr[i + 2][j];
}
function t5_180(i, j) {
  if (i + 1 >= N) return -1;
  if (j + 2 >= M) return -1;
  return arr[i + 1][j] + arr[i + 1][j + 1] + arr[i][j + 1] + arr[i + 1][j + 2];
}
function t5_270(i, j) {
  if (i + 2 >= N) return -1;
  if (j + 1 >= M) return -1;
  return arr[i][j + 1] + arr[i + 1][j + 1] + arr[i + 1][j] + arr[i + 2][j + 1];
}
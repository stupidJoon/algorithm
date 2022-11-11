#include <iostream>

using namespace std;

int n;
int **arr;
int cnt = 0;

void printArr() {
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) cout << arr[i][j] << ' ';
    cout << endl;
  }
  cout << endl;
}

void placeQueen(int x, int y) {
  for (int i = 0; i < n; i++) arr[y][i] += 1;
  for (int i = 0; i < n; i++) arr[i][x] += 1;
  for (int i = 0; (x - i >= 0) && (y - i >= 0); i++) arr[y - i][x - i] += 1;
  for (int i = 0; (x + i < n) && (y + i < n); i++) arr[y + i][x + i] += 1;
  for (int i = 0; (x + i < n) && (y - i >= 0); i++) arr[y - i][x + i] += 1;
  for (int i = 0; (x - i >= 0) && (y + i < n); i++) arr[y + i][x - i] += 1;
  arr[y][x] -= 5;
}

void removeQueen(int x, int y) {
  for (int i = 0; i < n; i++) arr[y][i] -= 1;
  for (int i = 0; i < n; i++) arr[i][x] -= 1;
  for (int i = 0; (x - i >= 0) && (y - i >= 0); i++) arr[y - i][x - i] -= 1;
  for (int i = 0; (x + i < n) && (y + i < n); i++) arr[y + i][x + i] -= 1;
  for (int i = 0; (x + i < n) && (y - i >= 0); i++) arr[y - i][x + i] -= 1;
  for (int i = 0; (x - i >= 0) && (y + i < n); i++) arr[y + i][x - i] -= 1;
  arr[y][x] += 5;
}

void f(int depth) {
  if (depth == n) {
    cnt += 1;
    return;
  }
  for (int i = 0; i < n; i++) {
    if (arr[depth][i] == 0) {
      placeQueen(i, depth);
      f(depth + 1);
      removeQueen(i, depth);
    }
  }
}

int main() {
  cin >> n;
  arr = new int*[n];
  for (int i = 0; i < n; i++) {
    arr[i] = new int[n];
    for (int j = 0; j < n; j++) arr[i][j] = 0;
  }
  f(0);
  cout << cnt;
  return 0;
}
#include <iostream>
#include <stdlib.h>
#include <vector>
#include <algorithm>

using namespace std;

int **arr;

void printArr() {
  cout << endl;
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) cout << arr[i][j] << ' ';
    cout << endl;
  }
}

vector<int> intersectionVec(vector<int> a, vector<int> b, vector<int> c) {
  vector<int> v;
  for (int i: a) {
    for (int j: b) {
      for (int k: c) {
        if ((i == j) && (j == k)) v.push_back(i);
      }
    }
  }
  return v;
}

vector<int> findZero() {
  for (int i = 0; i < 9; i++) {
    for (int j = 0; j < 9; j++) {
      if (arr[i][j] == 0) return { i, j };
    }
  }
  return {};
}

bool isPossibleNumber(int i, int j, int n) {
  for (int k = 0; k < 9; k++) {
    if (arr[i][k] == n) return false;
    if (arr[k][j] == n) return false;
  }
  for (int k = (i - (i % 3)); k < (i - (i % 3) + 3); k++) {
    for (int l = (j - (j % 3)); l < (j - (j % 3) + 3); l++) {
      if (arr[k][l] == n) return false;
    }
  }
  return true;
}

vector<int> possibleNumbers(int i, int j) {
  vector<int> v;
  for (int k = 1; k <= 9; k++) {
    if (isPossibleNumber(i, j, k)) {
      v.push_back(k);
    }
  }
  return v;
}

void f() {
  vector<int> coordinate = findZero();
  if (coordinate.size() == 0) {
    printArr();
    exit(0);
  }
  vector<int> v = possibleNumbers(coordinate[0], coordinate[1]);
  if (v.size() == 0) return;
  for (int i: v) {
    arr[coordinate[0]][coordinate[1]] = i;
    f();
    arr[coordinate[0]][coordinate[1]] = 0;
  }
}

int main() {
  arr = new int*[9];
  for (int i = 0; i < 9; i++) {
    arr[i] = new int[9];
    for (int j = 0; j < 9; j++) {
      cin >> arr[i][j];
    }
  }
  f();
}
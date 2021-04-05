#include <iostream>
#include <vector>

using namespace std;

int n;
int **arr;

int main() {
  cin >> n;
  arr = new int*[n];
  for (int i = 0; i < n; i++) {
    arr[i] = new int[i + 1];
    for (int j = 0; j <= i; j++) {
      cin >> arr[i][j];
    }
  }
  return 0;
}
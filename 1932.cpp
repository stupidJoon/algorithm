#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n;
int **arr;
vector<vector<int>> v;

int main() {
  cin >> n;
  arr = new int*[n];
  for (int i = 0; i < n; i++) {
    arr[i] = new int[i + 1];
    for (int j = 0; j <= i; j++) {
      cin >> arr[i][j];
    }
  }
  v.push_back({ arr[0][0] });
  for (int i = 1; i < n; i++) {
    vector<int> tmp;
    for (int j = 0; j <= i; j++) {
      if (j == 0) {
        tmp.push_back(v[i - 1][j] + arr[i][j]);
      }
      else if (j == i) {
        tmp.push_back(v[i - 1][j - 1] + arr[i][j]);
      }
      else {
        tmp.push_back(max(v[i - 1][j - 1] + arr[i][j], v[i - 1][j] + arr[i][j]));
      }
    }
    v.push_back(tmp);
  }
  cout << *max_element(v[n - 1].begin(), v[n - 1].end());
  return 0;
}
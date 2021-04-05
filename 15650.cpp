#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool checkVectorElementsIncluded(vector<vector<int>> usedDigit, vector<int> v) {
  for (vector<int> i: usedDigit) {
    bool flag = true;
    for (int j: v) {
      if (find(i.begin(), i.end(), j) == i.end()) {
        flag = false;
        break;
      }
    }
    if (flag == true) return true;
  }
  return false;
}

void f(int n, int m, vector<int> v, vector<vector<int>> &usedDigit) {
  if (m == 0 && !checkVectorElementsIncluded(usedDigit, v)) {
    for (int i: v) cout << i << ' ';
    usedDigit.push_back(v);
    cout << '\n';
    return;
  }
  for (int i = 1; i <= n; i++) {
    if (find(v.begin(), v.end(), i) != v.end()) continue;
    v.push_back(i);
    f(n, m - 1, v, usedDigit);
    v.pop_back();
  }
}

int main() {
  int n, m;
  cin >> n >> m;
  vector<int> v;
  vector<vector<int>> usedDigit;
  f(n, m, v, usedDigit);
  return 0;
}
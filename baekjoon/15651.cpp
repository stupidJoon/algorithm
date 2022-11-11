#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void f(int n, int m, vector<int> v) {
  if (m == 0) {
    for (int i: v) cout << i << ' ';
    cout << '\n';
    return;
  }
  for (int i = 1; i <= n; i++) {
    if (find(v.begin(), v.end(), i) != v.end()) continue;
    v.push_back(i);
    f(n, m - 1, v);
    v.pop_back();
  }
}

int main() {
  int n, m;
  cin >> n >> m;
  vector<int> v;
  f(n, m, v);
  return 0;
}
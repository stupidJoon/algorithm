#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int n, m;
vector<int> v;

void f(int depth) {
  if (depth == m) {
    for (int i: v) cout << i << ' ';
    cout << '\n';
    return;
  }
  for (int i = (depth == 0) ? 1 : v.back(); i <= n; i++) {
    v.push_back(i);
    f(depth + 1);
    v.pop_back();
  }
}

int main() {
  cin >> n >> m;
  f(0);
  return 0;
}
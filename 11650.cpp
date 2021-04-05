#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  vector<vector<int>> v;
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    vector<int> axis;
    int x, y;
    cin >> x >> y;
    axis.push_back(x);
    axis.push_back(y);
    v.push_back(axis);
  }
  sort(v.begin(), v.end(), [](vector<int> a, vector<int> b) -> bool {
    if (a[0] == b[0]) {
      return a[1] < b[1];
    }
    return a[0] < b[0];
  });
  for (vector<int> i: v) {
    cout << i[0] << ' ' << i[1] << '\n';
  }
  return 0;
}
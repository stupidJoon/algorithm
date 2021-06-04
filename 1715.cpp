#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  int n;
  vector<int> v;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int tmp;
    cin >> tmp;
    v.push_back(tmp);
  }
  if (n == 1) {
    cout << v[0];
    return 0;
  }
  sort(v.begin(), v.end());
  int sum = v[0] + v[1];
  for (int i = 2; i < n; i++) {
    sum += sum + v[i];
  }
  cout << sum;
  // for (int i: v) cout << i << ' ';
  return 0;
}

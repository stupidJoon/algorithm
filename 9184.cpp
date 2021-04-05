#include <iostream>
#include <vector>
#include <map>

using namespace std;

map<vector<int>, int> m;

int w(int a, int b, int c) {
  vector<int> v = { a, b, c };
  if (m.find(v) == m.end()) {
    if ((a <= 0 || b <= 0) || c <= 0) {
      m[v] = 1;
      return 1;
    }
    if ((a > 20 || b > 20) || c > 20) {
      int n = w(20, 20, 20);
      m[v] = n;
      return n;
    }
    if (a < b && b < c) {
      int n = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
      m[v] = n;
      return n;
    }
    int n = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
    m[v] = n;
    return n;
  }
  else {
    return m[v];
  }  
}

int main() {
  while (true) {
    int a, b, c;
    cin >> a >> b >> c;
    if ((a == -1 && b == -1) && c == -1) break;
    cout << "w(" << a << ", " << b << ", " << c << ") = " << w(a, b, c) << endl;
  }
}
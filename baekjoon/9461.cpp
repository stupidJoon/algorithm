#include <iostream>

using namespace std;

int n;
long long arr[100] = { 0 };

long long f(int m) {
  if (m == 0) return 1;
  if (m == 1) return 1;
  if (m == 2) return 1;
  if (m == 3) return 2;
  if (m == 4) return 2;
  if (arr[m] != 0) return arr[m];
  return arr[m] = f(m - 1) + f(m - 5);
}

int main() {
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    cin >> n;
    cout << f(n - 1) << endl;
  }
  return 0;
}
#include <iostream>

using namespace std;

int n;
int arr[1000001] = { 0 };

int f(int m) {
  if (m == n) return 1;
  if (m > n) return 0;
  if (arr[m] != 0) return arr[m];
  return arr[m] = (f(m + 2) % 15746 + f(m + 1) % 15746) % 15746;
}

int main() {
  cin >> n;
  cout << f(0);
  return 0;
}
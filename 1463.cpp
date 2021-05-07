#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int dp[1000001] = { 0 };

int f(int n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  if (n == 3) return 1;
  if (dp[n] != 0) return dp[n];
  int minVal;
  if (n % 3 == 0 && n % 2 == 0) {
    minVal = min({ f(n / 3), f(n / 2), f(n - 1) }) + 1;
  }
  else if (n % 3 == 0) {
    minVal = min(f(n / 3), f(n - 1)) + 1;
  }
  else if (n % 2 == 0) {
    minVal = min(f(n / 2), f(n - 1)) + 1;
  }
  else {
    minVal = f(n - 1) + 1;
  }
  dp[n] = minVal;
  return minVal;
}

int main() {
  int n;
  cin >> n;
  cout << f(n);
  return 0;
}
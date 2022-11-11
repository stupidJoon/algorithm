#include <iostream>

using namespace std;

long long dp[91] = { 0, 1 };

int main() {
  int n;
  cin >> n;
  if (n == 0) {
    cout << 0;
    return 0;
  }
  if (n == 1) {
    cout << 1;
    return 0;
  }
  for (int i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  cout << dp[n];
  return 0;
}

#include <iostream>

using namespace std;

int dp[10] = { 1, 2, 4 };

int main() {
  int t;
  cin >> t;
  // f(n) = n을 123의 합 방법의 수
  // dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1]
  for (int i = 3; i < 11; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }
  for (int i = 0; i < t; i++) {
    int n;
    cin >> n;
    cout << dp[n - 1] << endl;
  }
  return 0;
}

#include <iostream>

using namespace std;

int dp[1000] = { 1, 2 };

int main() {
  int n;
  cin >> n;
  // f(n) = 2xn 직사각형 채우는 방법의 수
  // dp[i] = dp[i - 2] * 2 + dp[i - 1]
  for (int i = 2; i < n; i++) {
    dp[i] = (dp[i - 2] % 10007 + dp[i - 1] % 10007) % 10007;
  }
  cout << dp[n - 1] % 10007;
  return 0;
}

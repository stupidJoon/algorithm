#include <iostream>
#include <algorithm>

using namespace std;

int arr[1000];
int dp[1000][2];

int main() {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  for (int i = 0; i < n; i++) {
    int ascendingMaxLen = 0;
    int descendingMaxLen = 0;
    for (int j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        // 증가하는 수열
        if (dp[j][0] > ascendingMaxLen) ascendingMaxLen = dp[j][0];
      }
      else if (arr[j] > arr[i]) {
        // 증가하다가 감소하는 수열
        if (max(dp[j][0], dp[j][1]) > descendingMaxLen) descendingMaxLen = max(dp[j][0], dp[j][1]);
      }
    }
    dp[i][0] = ascendingMaxLen + 1;
    dp[i][1] = descendingMaxLen + 1;
  }
  // for (int i = 0; i < n; i++) cout << dp[i][0] << ' ' << dp[i][1] << endl;
  int maxLen = 0;
  for (int i = 0; i < n; i++) {
    if (dp[i][0] > maxLen) maxLen = dp[i][0];
    if (dp[i][1] > maxLen) maxLen = dp[i][1];
  }
  cout << maxLen;
  return 0;
}

// dp[0] = 증가하는 수열
// dp[1] = 감소하는 수열
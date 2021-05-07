#include <iostream>
#include <algorithm>

using namespace std;

int arr[10001], dp[10001];

int main() {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  dp[0] = arr[0];
  if (n > 1) dp[1] = arr[0] + arr[1];
  if (n > 2) dp[2] = max({ arr[0] + arr[2], arr[1] + arr[2], arr[0] + arr[1] });
  for (int i = 3; i < n; i++) {
    dp[i] = max({ dp[i - 3] + arr[i - 1] + arr[i], dp[i - 2] + arr[i], dp[i - 1] });
  }
  cout << *max_element(dp, dp + n);
  return 0;
}

// int main() {
//   int n;
//   cin >> n;
//   for (int i = 0; i < n; i++) {
//     cin >> arr[i];
//   }
//   dp[0] = arr[0];
//   if (n > 1) dp[1] = arr[0] + arr[1];
//   if (n > 2) dp[2] = max(arr[0] + arr[2], arr[1] + arr[2]);
//   for (int i = 3; i < n; i++) {
//     dp[i] = max(dp[i - 3] + arr[i - 1], dp[i - 2]) + arr[i];
//     dp[i] = max(*max_element(dp, dp + i - 2) + arr[i - 1], *max_element(dp, dp + i - 1)) + arr[i];
//   }
//   cout << *max_element(dp, dp + n);
//   return 0;
// }
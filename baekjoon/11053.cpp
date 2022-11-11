#include <iostream>
#include <algorithm>

using namespace std;

int arr[1000];
int dp[1000];

int main() {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  for (int i = 0; i < n; i++) {
    int maxDP = 0;
    for (int j = 0; j < i; j++) {
      if (arr[j] < arr[i] && dp[j] > maxDP) {
        maxDP = dp[j];
      }
    }
    dp[i] = maxDP + 1;
  }
  cout << *max_element(dp, dp + n);
  return 0;
}
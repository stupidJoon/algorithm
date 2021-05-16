#include <iostream>

using namespace std;

int arr[100];
int dp[100];

int main() {
  // 가장 많이 intersected된 선부터 지우면 되지 않을까요요요요요요?
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int a, b;
    cin >> a >> b;
    arr[a - 1] = b;
  }
  for (int i = 0; i < n; i++) {
    if (arr[i] == 0) continue;
    int interSected = 0;
    for (int j = 0; j < i; j++) {
      // 나보다 아래 전깃줄
      if (arr[j] == 0) continue;
      interSected += (arr[i] < arr[j]);
    }
    for (int j = i + 1; j < n; j++) {
      // 나보다 위 전깃줄
      if (arr[j] == 0) continue;
      interSected += (arr[i] > arr[j]);
    }
    dp[i] = interSected;
  }
  for (int i = 0; i <  n; i++) cout << arr[i] << ' ';
  cout << endl;
  for (int i = 0; i < n; i++) cout << dp[i] << ' ';
  return 0;
}

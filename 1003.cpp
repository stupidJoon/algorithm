#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> dp;

vector<int> f(int n) {
  if (n == 0) {
    vector<int> v = { 1, 0 };
    return v;
  }
  if (n == 1) {
    vector<int> v = { 0, 1 };
    return v;
  }
  vector<int> v1;
  vector<int> v2;
  if (dp[n - 1][0] == 0 && dp[n - 1][1] == 0) {
    v1 = f(n - 1);
    dp[n - 1][0] = v1[0];
    dp[n - 1][1] = v1[1];
  }
  else {
    v1 = dp[n - 1];
  }
  if (dp[n - 2][0] == 0 && dp[n - 2][1] == 0) {
    v2 = f(n - 2);
    dp[n - 2][0] = v2[0];
    dp[n - 2][1] = v2[1];
  }
  else {
    v2 = dp[n - 2];
  }
  return { v1[0] + v2[0], v1[1] + v2[1] };
}

int main() {
  for (int i = 0; i < 40; i++) {
    dp.push_back({ 0, 0 });
  }
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    int n;
    cin >> n;
    vector<int> v = f(n);
    cout << v[0] << ' ' << v[1] << endl;
  }
}
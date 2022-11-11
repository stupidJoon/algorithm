#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  int n;
  vector<int> v, dp;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int score;
    cin >> score;
    v.push_back(score);
  }
  dp.push_back(v.at(0));
  if (n > 1) dp.push_back(v.at(0) + v.at(1));
  if (n > 2) dp.push_back(max(v.at(0), v.at(1)) + v.at(2));
  for (int i = 3; i < n; i++) {
    dp.push_back(max(dp.at(i - 3) + v.at(i - 1), dp.at(i - 2)) + v.at(i));
  }
  cout << dp.at(n - 1);
  return 0;
}
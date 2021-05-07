#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n;
  int isConnected = 2;
  vector<int> v, dp;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int score;
    cin >> score;
    v.push_back(score);
  }
  dp.push_back(v.at(0));
  if (n > 1) dp.push_back(v.at(0) + v.at(1));
  for (int i = 2; i < n; i++) {
    if (dp.at(i - 2) > dp.at(i - 1) || isConnected == 2) {
      dp.push_back(dp.at(i - 2) + v.at(i));
      isConnected = 1;
    }
    else {
      dp.push_back(dp.at(i - 1) + v.at(i));
      isConnected += 1;
    }
  }
  cout << dp.at(n - 1);
  return 0;
}
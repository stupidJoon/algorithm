#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    int n;
    cin >> n;
    vector<int> score1, score2;
    for (int j = 0; j < n; j++) {
      int tmp1, tmp2;
      cin >> tmp1 >> tmp2;
      score1.push_back(tmp1);
      score2.push_back(tmp2);
    }
    auto maxScore1 = max_element(score1.begin(), score1.end());
    int maxScore2 = *max_element(score2.begin(), score2.end());
    cout << maxScore1 - score1.begin();
  }
  return 0;
}

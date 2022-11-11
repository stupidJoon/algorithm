#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main() {
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  
  int n;
  cin >> n;
  vector<int> v;
  for (int i = 0; i < n; i++) {
    int rope;
    cin >> rope;
    v.push_back(rope);
  }
  sort(v.begin(), v.end(), greater<int>());
  int maxWeight = 0;
  for (int i = 0; i < v.size(); i++) {
    maxWeight = max(maxWeight, v[i] * (i + 1));
  }
  cout << maxWeight;
  return 0;
}

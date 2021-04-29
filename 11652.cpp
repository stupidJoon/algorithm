#include <iostream>
#include <map>

using namespace std;

int main() {
  int n;
  pair<long long, int> max = { 0, 0 };
  map<long long, int> m;
  cin >> n;
  for (int i = 0; i < n; i++) {
    long long card;
    cin >> card;
    if (m.find(card) == m.end()) {
      m[card] = 1;
    }
    else {
      m[card] += 1;
    }
  }
  for (auto i: m) {
    if (i.second > max.second) max = i;
  }
  for (auto i: m) {
    if (i.second == max.second && i.first < max.first) max = i;
  }
  cout << max.first;
  return 0;
}
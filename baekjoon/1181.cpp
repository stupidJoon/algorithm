#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int main() {
  vector<string> v;
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    string word;
    cin >> word;
    v.push_back(word);
  }
  sort(v.begin(), v.end(), [](string a, string b) -> bool {
    if (a.length() == b.length()) return a < b;
    return a.length() < b.length();
  });
  v.erase(unique(v.begin(), v.end()), v.end());
  for (string i: v) {
    cout << i << '\n';
  }
  return 0;
}
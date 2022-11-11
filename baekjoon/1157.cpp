#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
  string s;
  map<char, int> m;
  pair<char, int> max;
  cin >> s;
  for (char c: s) {
    c = toupper(c);
    if (m.find(c) == m.end()) m[c] = 1;
    else m[c] += 1;
  }
  for (auto i: m) {
    if (i.second > max.second) max = i;
    else if (i.second == max.second) max.first = '?';
  }
  cout << max.first;
  return 0;
}
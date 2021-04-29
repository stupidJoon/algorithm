#include <iostream>
#include <string>

using namespace std;

bool removeBrace(string &s) {
  if (s.empty()) return false;
  for (int i = 0; i < s.size() - 1; i++) {
    if (s.at(i) == '(' && s.at(i + 1) == ')') {
      s.replace(i, 2, "");
      return true;
    }
  }
  return false;
}

int main() {
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    string s;
    cin >> s;
    while (removeBrace(s));
    cout << ((s.empty() ? "YES" : "NO")) << endl;
  }
  return 0;
}
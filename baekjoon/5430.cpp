#include <iostream>
#include <cctype>
#include <deque>
#include <algorithm>
#include <sstream>
#include <string>

using namespace std;

bool op(deque<int> &x, string p) {
  bool isReversed = false;
  for (char s: p) {
    if (s == 'R') {
      isReversed = !isReversed;
    }
    else if (s == 'D') {
      if (x.empty()) return false;
      if (isReversed) {
        x.pop_back();
      }
      else {
        x.pop_front();
      }
    }
  }
  if (isReversed) reverse(x.begin(), x.end());
  return true;
}

void printDeque(deque<int> x) {
  if (x.empty()) cout << "[]\n";
  else {
    cout << '[' << x.at(0);
    for (int i = 1; i < x.size(); i++) {
      cout << ',' << x.at(i);
    }
    cout << "]\n";
  }
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  int t;
  cin >> t;
  for (int i = 0; i < t; i++) {
    string p, strX;
    int n;
    deque<int> x;
    cin >> p;
    cin >> n;
    cin >> strX;
    strX.erase(strX.begin(), strX.begin() + 1);
    strX.erase(strX.end() - 1, strX.end());
    istringstream ss(strX);
    string buf;
    while (getline(ss, buf, ',')) x.push_back(stoi(buf));
    if (op(x, p)) {
      printDeque(x);
    }
    else {
      cout << "error\n";
    }
  }
  return 0;
}
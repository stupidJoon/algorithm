#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <cmath>
#include <algorithm>

using namespace std;

int main() {
  int n;
  vector<string> v;
  map<char, int> m;
  for (char ch = 'A'; ch <= 'Z'; ch++)
    m[ch] = 0;
  cin >> n;
  for (int i = 0; i < n; i++) {
    string str;
    cin >> str;
    v.push_back(str);
  }
  for (int i = 0; i < n; i++) {
    string str = v[i];
    for (int j = 0; j < str.size(); j++) {
      int index = str.size() - 1 - j;
      char ch = str[index];
      m[ch] += pow(10, j);
    }
  }
  vector<pair<char, int>> mapToVec(m.begin(), m.end());
  sort(mapToVec.begin(), mapToVec.end(), [](pair<int, int> a, pair<int, int> b) {
    return a.second > b.second;
  });
  int cnt = 9;
  for (pair<char, int> &p: mapToVec) {
    p.second = cnt;
    cnt -= 1;
  }
  int sum = 0;
  for (pair<char, int> p: mapToVec) {
    sum += m[p.first] * p.second;
  }
  cout << sum;
  return 0;
}

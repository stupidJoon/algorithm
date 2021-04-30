#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

int f(vector<vector<string>> clothes) {
  int numberOfCases = 1;
  unordered_map<string, vector<string>> m;
  for (vector<string> clothing: clothes) {
    if (m.find(clothing.at(1)) == m.end()) {
      vector<string> v = { clothing.at(0) };
      m[clothing.at(1)] = v;
    }
    else m[clothing.at(1)].push_back(clothing.at(0));
  }
  for (auto i: m) numberOfCases *= (i.second.size() + 1);
  return numberOfCases - 1;
}

int main() {
  vector<vector<string>> ex1 = { { "yellowhat", "headgear" }, { "bluesunglasses", "eyewear" }, { "green_turban", "headgear" } };
  vector<vector<string>> ex2 = { { "crowmask", "face" }, { "bluesunglasses", "face" }, { "smoky_makeup", "face" } };
  cout << f(ex2);
  return 0;
}
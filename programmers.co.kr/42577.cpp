#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool prefixCheck(string shortStr, string longStr) {
  if (shortStr.size() > longStr.size()) return true;
  string substringed = longStr.substr(0, shortStr.size());
  return !(shortStr == substringed);
}

bool f(vector<string> phoneBook) {
  sort(phoneBook.begin(), phoneBook.end());
  for (int i = 0; i < phoneBook.size(); i++) {
    for (int j = 0; j < phoneBook.size(); j++) {
      if (i == j) continue;
      if (prefixCheck(phoneBook.at(i), phoneBook.at(j))) break;
      else return false;
    }
  }
  return true;
}

int main() {
  vector<string> ex1 = { "119", "97674223", "1195524421" };
  vector<string> ex2 = { "123","456","789" };
  vector<string> ex3 = { "12","123","1235","567","88" };
  vector<string> ex4 = { "119","118119" };
  cout << f(ex3);
  return 0;
}
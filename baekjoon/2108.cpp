#include <iostream>
#include <vector>
#include <numeric>
#include <cmath>
#include <algorithm>
#include <map>
#include <limits>

using namespace std;

int getValueMax(map<int, int> m) {
  int max = numeric_limits<int>::min();
  for (map<int, int>::iterator i = m.begin(); i != m.end(); i++) {
    if (i->second > max) max = i->second;
  }
  return max;
}
vector<int> getSortedVectorSameValue(map<int, int> m, int value) {
  vector<int> v;
  for (map<int, int>::iterator i = m.begin(); i != m.end(); i++) {
    if (i->second == value) v.push_back(i->first);
  }
  return v;
}
int getSecondMinimumValue(vector<int> v) {
  if (v.size() == 1) {
    return v[0];
  }
  return v[1];
}

int main() {
  int n;
  cin >> n;
  vector<int> v(n);
  for (int i = 0; i < n; i++) {
    cin >> v[i];
  }
  
  cout << round(accumulate(v.begin(), v.end(), 0) / (double)n) << endl;
  
  sort(v.begin(), v.end());
  cout << v[n / 2] << endl;

  map<int, int> m;
  for (int i: v) {
    if (m.find(i) != m.end()) m[i] += 1;
    else m[i] = 1;
  }
  cout << getSecondMinimumValue(getSortedVectorSameValue(m, getValueMax(m))) << endl;

  cout << *max_element(v.begin(), v.end()) - *min_element(v.begin(), v.end()) << endl;
  return 0;
}
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

void printVec(vector<string> v) {
  for (string s: v) cout << s << ' ';
  cout << endl;
}

string f(vector<string> participant, vector<string> completion) {
  vector<string> diff;
  sort(participant.begin(), participant.end());
  sort(completion.begin(), completion.end());
  set_difference(participant.begin(), participant.end(), completion.begin(), completion.end(), inserter(diff, diff.begin()));
  return diff.at(0);
}

int main() {
  vector<string> a = { "leo", "kiki", "eden" };
  vector<string> b = { "marina", "josipa", "nikola", "vinko", "filipa" };
  vector<string> c = { "mislav", "stanko", "mislav", "ana" };
  vector<string> d = { "eden", "kiki" };
  vector<string> e = { "josipa", "filipa", "marina", "nikola" };
  vector<string> ff = { "stanko", "ana", "mislav" };
  cout << f(b, e);
  return 0;
}
#include <iostream>
#include <vector>
#include <stdlib.h>
#include <algorithm>

using namespace std;

int n;
int **arr;
vector<int> team1, team2, remaining;
vector<int> teamStatDiffVec;

void printArr() {
  cout << endl;
  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) cout << arr[i][j] << ' ';
    cout << endl;
  }
}

int getStatDiff(vector<int> team1, vector<int> team2) {
  int team1Stat = 0;
  int team2Stat = 0;
  for (int i: team1) {
    for (int j: team1) {
      if (i != j) {
        team1Stat += arr[i][j];
      }
    }
  }
  for (int i: team2) {
    for (int j: team2) {
      if (i != j) {
        team2Stat += arr[i][j];
      }
    }
  }
  return abs(team1Stat - team2Stat);
}

void f() {
  if (remaining.empty()) {
    teamStatDiffVec.push_back(getStatDiff(team1, team2));
    return;
  }
  int player = remaining.front();
  remaining.erase(remaining.begin());
  if (team1.size() != n / 2) {
    team1.push_back(player);
    f();
    team1.pop_back();
  }
  if (team2.size() != n / 2) {
    team2.push_back(player);
    f();
    team2.pop_back();
  }
  remaining.insert(remaining.begin(), player);
}

int main() {
  cin >> n;
  arr = new int*[n];
  for (int i = 0; i < n; i++) {
    remaining.push_back(i);
    arr[i] = new int[n];
    for (int j = 0; j < n; j++) {
      cin >> arr[i][j];
    }
  }
  f();
  cout << *min_element(teamStatDiffVec.begin(), teamStatDiffVec.end());
  return 0;
}
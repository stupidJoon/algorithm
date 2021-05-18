#include <iostream>
#include <vector>

using namespace std;

int n;
vector<int> v, dp;

int main() {
  cin >> n;
  for (int i = 0; i < n; i++) {
    int a, b;
    cin >> a >> b;
    if (v.size() < a) v.resize(a);
    v[a - 1] = b;
  }
  for (int i = 1; i < v.size(); i++) {
    
  }
  return 0;
}

// void removeWire() {
//   // 가장 많이 intersect된 전깃줄을 찾기
//   pair<int, int> maxIntersected = { 0, 0 };
//   for (int i = 0; i < len; i++) {
//     int intersected = 0;
//     for (int j = 0; j < i; j++) {
//       if (v[j] > v[i] && v[j] != 0) intersected += 1;
//     }
//     for (int j = i + 1; j < len; j++) {
//       if (v[j] < v[i] && v[j] != 0) intersected += 1;
//     }
//     intersected = (v[i]) ? intersected : 0;
//     if (intersected > maxIntersected.second) {
//       maxIntersected = { i, intersected };
//     }
//   }
//   cout << maxIntersected.first << ' ' << maxIntersected.second << endl;
//   // 가장 많이 intersect된 전깃줄을 제거
//   v[maxIntersected.first] = 0; 
// }

// bool isIntersected() {
//   // intersect된 전깃줄이 하나라도 있는지 체크해서 리턴
//   for (int i = 0; i < len; i++) {
//     if (v[i] == 0) continue;
//     for (int j = 0; j < i; j++) {
//       if (v[j] > v[i] && v[j] != 0) return true;
//     }
//     for (int j = i + 1; j < len; j++) {
//       if (v[j] < v[i] && v[j] != 0) return true;
//     }
//   }
//   return false;
// }

// int main() {
//   cin >> n;
//   for (int i = 0; i < n; i++) {
//     int a, b;
//     cin >> a >> b;
//     if (v.size() < a) {
//       v.resize(a);
//       len = a;
//     }
//     v[a - 1] = b;
//   }
//   int cnt = 0;
//   while (isIntersected()) {
//     removeWire();
//     cnt += 1;
//   }
//   cout << cnt;
//   return 0;
// }

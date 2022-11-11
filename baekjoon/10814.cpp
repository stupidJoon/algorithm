#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Member {
  int order;
  int age;
  string name;
};

int main() {
  vector<Member> v;
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    Member m;
    m.order = i;
    cin >> m.age >> m.name;
    v.push_back(m);
  }
  sort(v.begin(), v.end(), [](Member a, Member b) -> bool {
    if (a.age == b.age) return a.order < b.order;
    return a.age < b.age;
  });
  for (Member i: v) {
    cout << i.age << ' ' << i.name << '\n';
  }
  return 0;
}
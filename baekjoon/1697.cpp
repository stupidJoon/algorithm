#include <iostream>
#include <deque>

using namespace std;

int main() {
  int N, K;
  cin >> N >> K;

  deque<int> queue = { N };
  deque<int> costs = { 0 };
  while (queue.size() > 0) {
    int n = queue.front();
    int c = costs.front();
    queue.pop_front();
    costs.pop_front();
    if (n == K) {
      cout << c << endl;
      return 0;
    }
    queue.push_back(n * 2);
    queue.push_back(n - 1);
    queue.push_back(n + 1);
    costs.push_back(c + 1);
    costs.push_back(c + 1);
    costs.push_back(c + 1);
  }
  return 0;
}

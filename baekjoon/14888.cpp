#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> arr;
vector<int> operators;
vector<int> sumArr;

int operation(int n, int m, int op) {
  if (op == 0) {
    return n + m;
  }
  else if (op == 1) {
    return n - m;
  }
  else if (op == 2) {
    return n * m;
  }
  else {
    return n / m;
  }
}

void f(int sum) {
  if (arr.empty()) {
    sumArr.push_back(sum);
    return;
  }
  for (int i = 0; i < 4; i++) {
    if (operators[i] == 0) continue;
    operators[i] -= 1;
    int operand = arr.front();
    int operationResult = operation(sum, operand, i);
    arr.erase(arr.begin());
    f(operationResult);
    arr.insert(arr.begin(), operand);
    operators[i] += 1;
  }
}

int main() {
  int n;
  cin >> n;
  for (int i = 0; i < n; i++) {
    int tmp;
    cin >> tmp;
    arr.push_back(tmp);
  }
  for (int i = 0; i < 4; i++) {
    int tmp;
    cin >> tmp;
    operators.push_back(tmp);
  }
  int first = arr.front();
  arr.erase(arr.begin());
  f(first);
  cout << *max_element(sumArr.begin(), sumArr.end()) << endl << *min_element(sumArr.begin(), sumArr.end());
  return 0;
}
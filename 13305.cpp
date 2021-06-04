#include <iostream>
#include <vector>
#include <limits>

using namespace std;

int main() {
  long long n;
  vector<long long> distances;
  vector<long long> prices;
  cin >> n;
  for (int i = 0; i < n - 1; i++) {
    long long distance;
    cin >> distance;
    distances.push_back(distance);
  }
  for (int i = 0; i < n; i++) {
    long long price;
    cin >> price;
    prices.push_back(price);
  }
  long long lowestPrice = numeric_limits<long long>::max();
  long sum = 0;
  for (int i = 0; i < n - 1; i++) {
    lowestPrice = min(prices[i], lowestPrice);
    sum += distances[i] * lowestPrice;
  }
  cout << sum;
  return 0;
}

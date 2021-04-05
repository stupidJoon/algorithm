#include <stdio.h>
#include <limits.h>

int main() {
  int n;
  int min = INT_MAX;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    int tmp = i;
    int sum = i;
    while (tmp > 0) {
      sum += tmp % 10;
      tmp /= 10;
    }
    if (sum == n && sum < min) min = i;
  }
  printf("%d", (min == INT_MAX) ? 0 : min);
  return 0;
}
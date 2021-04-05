#include <stdio.h>
#include <limits.h>

int main() {
  int m, n;
  int min = INT_MAX;
  int sum = 0;
  scanf("%d %d", &m, &n);
  for (int i = m; i <= n; i++) {
    if (i == 2) {
      min = i;
      sum += i;
    }
    else {
      for (int j = 2; j < i; j++) {
        if (i % j == 0) { break; }
        else if (j == i - 1) {
          if (i < min) { min = i; }
          sum += i;
        }
      }
    }
  }
  if (sum == 0) {
    printf("-1");
  }
  else {
    printf("%d\n%d", sum, min);
  }
  return 0;
}
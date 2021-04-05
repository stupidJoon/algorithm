#include <limits.h>
#include <stdio.h>

int main() {
  int n;
  int max = INT_MIN;
  int min = INT_MAX;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    int a;
    scanf("%d", &a);
    if (a > max) {
      max = a;
    }
    if (a < min) {
      min = a;
    }
  }
  printf("%d %d", min, max);
  return 0;
}
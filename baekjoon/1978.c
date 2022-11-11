#include <stdio.h>

int main() {
  int n;
  int sum = 0;
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    int a;
    scanf("%d", &a);
    if (a == 2) {
      sum += 1;
      continue;
    }
    for (int i = 2; i < a; i++) {
      if (a % i == 0) {
        break;
      }
      if (i == a - 1) {
        sum += 1;
      }
    }
  }
  printf("%d", sum);
  return 0;
}
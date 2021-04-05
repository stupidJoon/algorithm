#include <stdio.h>

int main() {
  int n;
  scanf("%d", &n);
  if (n == 1) { printf("1"); return 0; }
  int sum = 1;
  for (int i = 1;; i++) {
    sum += 6 * i;
    if (n <= sum) {
      printf("%d", i + 1);
      return 0;
    }
  }
  return 0;
}
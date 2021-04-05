#include <stdio.h>

int main() {
  int a, b, c;
  scanf("%d %d %d", &a, &b, &c);
  int d = a * b * c;
  int e[10] = {0};
  while (d > 0) {
    e[d % 10] += 1;
    d /= 10;
  }
  for (int i = 0; i < 10; i++) {
    printf("%d\n", e[i]);
  }
  return 0;
}
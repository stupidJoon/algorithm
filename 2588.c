#include <stdio.h>

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  int val = a * b;
  while (b != 0) {
    printf("%d\n", a * (b % 10));
    b /= 10;
  }
  printf("%d", val);
  return 0;
}
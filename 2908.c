#include <stdio.h>

int reverse(int a) {
  int b = 0;
  while (a > 0) {
    b = b * 10 + a % 10;
    a /= 10;
  }
  return b;
}

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  a = reverse(a);
  b = reverse(b);
  printf("%d", (a > b) ? a : b);
  return 0;
}
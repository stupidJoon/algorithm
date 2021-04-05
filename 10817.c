#include <stdio.h>

int main() {
  int a, b, c;
  scanf("%d %d %d", &a, &b, &c);
  if (a == b || a == c) { printf("%d", a); return 0; }
  if (b == c) { printf("%d", b); return 0; }
  if ((b > a && a > c) || (c > a && a > b)) { printf("%d", a); return 0; }
  if ((a > b && b > c) || (c > b && b > a)) { printf("%d", b); return 0; }
  printf("%d", c);
  return 0;
}
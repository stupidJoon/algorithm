#include <stdio.h>

int main() {
  int a, b, c;
  int d = 1, e = 1, f = 1, g = 1;
  scanf("%d %d %d", &a, &b, &c);
  while ((a != d || b != e) || c != f) {
    if (d > 14) { d = 1; } else { d += 1; }
    if (e > 27) { e = 1; } else { e += 1; }
    if (f > 18) { f = 1; } else { f += 1; }
    g += 1;
  }
  printf("%d", g);
  return 0;
}
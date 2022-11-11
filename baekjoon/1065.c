#include <stdio.h>

int isHan(int a) {
  if (a < 100) {
    return 1;
  }
  else {
    int before, diff;
    before = a % 10;
    a /= 10;
    diff = a % 10 - before;
    before = a % 10;
    a /= 10;
    while (a > 0) {
      if (a % 10 - before != diff) { return 0; }
      a /= 10;
    }
    return 1;
  }
}

int main() {
  int a, b = 0;
  scanf("%d", &a);
  for (int i = 1; i <= a; i++) { if (isHan(i)) { b += 1; } }
  printf("%d", b);
  return 0;
}
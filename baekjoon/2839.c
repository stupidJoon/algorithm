#include <stdio.h>
#include <limits.h>

int main() {
  int a, b = INT_MAX, c = 0;
  scanf("%d", &a);
  while (a >= 3) {
    if (a % 5 == 0) { if (a / 5 + c < b) { b = a / 5 + c; } }
    if (a % 3 == 0) { if (a / 3 + c < b) { b = a / 3 + c; } }
    a -= 5;
    c += 1;
  }
  printf("%d", (b == INT_MAX) ? -1 : b);
  return 0;
}
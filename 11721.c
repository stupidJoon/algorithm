#include <stdio.h>

int main() {
  int a = 0;
  while (1) {
    char b = getchar();
    if (b == '\n') break;
    if (a > 9) { printf("\n"); a = 0; }
    printf("%c", b);
    a += 1;
  }
  return 0;
}
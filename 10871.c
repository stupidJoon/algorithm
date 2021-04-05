#include <stdio.h>

int main() {
  int a, b, isSpace = 0;
  scanf("%d %d", &a, &b);
  for (int i = 0; i < a; i++) {
    int c;
    scanf("%d", &c);
    if (c < b) {
      if (isSpace) { printf(" %d", c); }
      else { printf("%d", c); isSpace = 1; }
    }
  }
  return 0;
}
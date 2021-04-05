#include <stdio.h>

int main() {
  int x;
  scanf("%d", &x);
  int a = 0;
  for (int i = 0;; i++) {
    for (int j = 0; j <= i; j++) {
      a += 1;
      if (a == x) {
        if (i % 2 == 1) {
          printf("%d/%d", j + 1, i - j + 1);
        }
        else {
          printf("%d/%d", i - j + 1, j + 1);
        }
        return 0;
      }
    }
  }
  return 0;
}
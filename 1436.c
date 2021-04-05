#include <stdio.h>

int is666(int a) {
  int b = 0;
  while (a > 0) {
    if (b == 3) {
      break;
    }
    else if (b > 0) {
      if (a % 10 == 6) {
        b += 1;
      }
      else {
        b = 0;
      }
    }
    else if (b == 0) {
      if (a % 10 == 6) {
        b += 1;
      }
    }
    a /= 10;
  }
  return (b == 3) ? 1 : 0;
}

int main() {
  int a, b = 0;;
  scanf("%d", &a);
  for (int i = 0;; i++) {
    if (is666(i)) {
      b += 1;
      if (a == b) {
        printf("%d", i);
        return 0;
      }
    }
  }
  return 0;
}
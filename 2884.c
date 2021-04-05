#include <stdio.h>

int main() {
  int h, m;
  int reduceTime = 45;
  scanf("%d %d", &h, &m);
  while (m - reduceTime < 0) {
    if (h == 0) {
      h = 23;
    }
    else {
      h -= 1;
    }
    reduceTime -= 60;
  }
  printf("%d %d", h, m - reduceTime);
  return 0;
}
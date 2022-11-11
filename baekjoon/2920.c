#include <stdio.h>

int main() {
  int state;
  for (int i = 0; i < 8; i++) {
    int a;
    scanf("%d", &a);
    if (i == 0) {
      state = (a == 1);
    } else {
      if (state == 1) {
        if (a != i + 1) {
          printf("mixed");
          return 0;
        }
      } else {
        if (a != 8 - i) {
          printf("mixed");
          return 0;
        }
      }
    }
  }
  if (state == 1) {
    printf("ascending");
  } else {
    printf("descending");
  }
}
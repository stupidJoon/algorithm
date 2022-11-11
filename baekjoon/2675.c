#include <stdio.h>

int main() {
  int a;
  scanf("%d", &a);
  for (int i = 0; i < a; i++) {
    int b;
    char c[21];
    scanf("%d %s", &b, c);
    for (int j = 0; c[j] != '\0'; j++) {
      for (int k = 0; k < b; k++) {
        printf("%c", c[j]);
      }
    }
    if (i != a - 1) {
      printf("\n");
    }
  }
  return 0;
}
#include <stdio.h>
#include <stdlib.h>

int main() {
  int a;
  scanf("%d", &a);
  for (int i = 0; i < a; i++) {
    int b;
    scanf("%d", &b);
    int *c = (int*)malloc(sizeof(int) * b);
    int d = 0;
    for (int j = 0; j < b; j++) {
      int e;
      scanf("%d", &e);
      d += e;
      c[j] = e;
    }
    int f = 0;
    for (int j = 0; j < b; j++) {
      if (c[j] > (double)d / b) { f += 1; }
    }
    printf("%.3lf%%\n", (double)f / b * 100);
    free(c);
  }
  return 0;
}
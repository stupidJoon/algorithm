#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main() {
  int a, c = INT_MIN;
  float b = 0;
  scanf("%d", &a);
  int *d = (int*)malloc(sizeof(int) * a);
  for (int i = 0; i < a; i++) {
    scanf("%d", &d[i]);
    if (d[i] > c) { c = d[i]; }
  }
  for (int i = 0; i < a; i++) {
    b += (float)d[i] / c * 100;
  }
  printf("%f", b / (float)a);
  return 0;
}
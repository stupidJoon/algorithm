#include <stdio.h>
#include <math.h>

int main() {
  int a, b, v;
  int cnt = 0;
  scanf("%d %d %d", &a, &b, &v);
  printf("%d", (int)ceil((double)(v - a) / (a - b)) + 1);
  return 0;
}
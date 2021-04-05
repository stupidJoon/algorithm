#include <stdio.h>
#include <limits.h>

int main() {
  int x, y, w, h;
  scanf("%d %d %d %d", &x, &y, &w, &h);
  int minLenght = INT_MAX;
  if (x < minLenght) { minLenght = x; }
  if (y < minLenght) { minLenght = y; }
  if ((w - x) < minLenght) { minLenght = w - x; }
  if ((h - y) < minLenght) { minLenght = h - y; }
  printf("%d", minLenght);
  return 0;
}
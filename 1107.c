#include <stdio.h>
#include <stdlib.h>

int isInclude(int a, int *b, int c) {
  for (int i = 0; i < c; i++) {
    if (a == b[i]) { return 1; }
  }
  return 0;
}
int isValidNumber(int a, int *b, int c) {
  if (isInclude(a, b, c)) { return 0; }
  while (a > 0) {
    if (isInclude(a % 10, b, c)) { return 0; }
    a /= 10;
  }
  return 1;
}
int getCloestNumber(int a, int *b, int c) {
  if (c == 10) { return -1; }
  if (isValidNumber(a, b, c) == 1) { return a; }
  for (int i = 1;; i++) {
    if (isValidNumber(a - i, b, c) == 1 && a - i >= 0) { return a - i; }
    if (isValidNumber(a + i, b, c) == 1) { return a + i; }
  }
}
int getLength(int a) {
  int b = 0;
  if (a == 0) { return 1; }
  while (a > 0) {
    b += 1;
    a /= 10;
  }
  return b;
}
int getLeastPress(int a, int b) {
  int c = getLength(b) + abs((a > b) ? a - b : b - a);
  int d = (a > 100) ? a - 100 : 100 - a;
  if (b == -1) { return d; }
  return (c > d) ? d : c;
}

int main() {
  int a, b;
  int *c = NULL;
  scanf("%d %d", &a, &b);
  if (b > 0) {
    c = (int*)malloc(sizeof(int) * b);
    for (int i = 0; i < b; i++) {
      scanf("%d", &c[i]);
    }
  }
  else {
    c = (int*)malloc(0);
  }
  printf("%d", getLeastPress(a, getCloestNumber(a, c, b)));
  return 0;
}
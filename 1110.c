#include <stdio.h>

int plusCycle(int n, int *cnt) {
  *cnt += 1;
  if (n < 10) {
    n = 10 * n + n;
  }
  else {
    n = 10 * (n % 10) + (n / 10 + n % 10) % 10;
  }
  return n;
}

int main() {
  int n;
  int cnt = 0;
  scanf("%d", &n);
  int original = n;
  n = plusCycle(n, &cnt);
  while (n != original) {
    n = plusCycle(n, &cnt);
  }
  printf("%d", cnt);
  return 0;
}
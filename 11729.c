#include <stdio.h>

int getNumberOfHanoi(int n, int src, int dst) {
  if (n == 1) {
    return 1;
  }
  return getNumberOfHanoi(n - 1, src, 6 - src - dst) + getNumberOfHanoi(1, src, dst) + getNumberOfHanoi(n - 1, 6 - src - dst, dst);
}

int hanoi(int n, int src, int dst) {
  if (n == 1) {
    printf("%d %d\n", src, dst);
    return 1;
  }
  return hanoi(n - 1, src, 6 - src - dst) + hanoi(1, src, dst) + hanoi(n - 1, 6 - src - dst, dst);
}

int main() {
  int n;
  scanf("%d", &n);
  printf("%d\n", getNumberOfHanoi(n, 1, 3));
  hanoi(n, 1, 3);
  return 0;
}
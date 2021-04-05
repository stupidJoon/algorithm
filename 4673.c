#include <stdio.h>

int d(int n) {
  int sum = n;
  while (n > 0) {
    sum += n % 10;
    n /= 10;
  }
  return sum;
}

int main() {
  for (int i = 1; i <= 10000; i++) {
    int isD = 0;
    for (int j = 1; j < i; j++) {
      isD = (d(j) == i);
      if (isD == 1) { break; }
    }
    if (isD == 0) {
      printf("%d\n", i);
    }
  }
  return 0;
}
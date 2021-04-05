#include <limits.h>
#include <stdio.h>

int main() {
  int max = INT_MIN;
  int cnt;
  for (int i = 0; i < 9; i++) {
    int n;
    scanf("%d", &n);
    if (n > max) {
      max = n;
      cnt = i + 1;
    }
  }
  printf("%d\n%d", max, cnt);
  return 0;
}
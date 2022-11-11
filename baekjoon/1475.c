#include <stdio.h>
#include <stdlib.h>

int split(int n, int *arr) {
  if (n == 0) {
    arr = realloc(arr, sizeof(int));
    arr[0] = 0;
    return 1;
  }
  int i;
  for (i = 0; n > 0; i++) {
    arr = realloc(arr, sizeof(int) * (i + 1));
    arr[i] = n % 10;
    n /= 10;
  }
  return i;
}

int main() {
  int n;
  scanf("%d", &n);
  int *arr = (int*)malloc(0);
  int len = split(n, arr);
  int digits[] = { 0, 0, 0, 0, 0, 0, 0, 0, 0 };
  int cnt = 0;
  for (int i = 0; i < len; i++) {
    if (arr[i] == 9) { arr[i] = 6; }
    if (digits[arr[i]] == 0) {
      for (int j = 0; j < 9; j++) { digits[j] += 1; }
      digits[6] += 1;
      cnt += 1;
    }
    digits[arr[i]] -= 1;
  }
  printf("%d", cnt);
}
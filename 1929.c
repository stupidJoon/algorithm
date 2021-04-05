#include <stdio.h>
#include <stdlib.h>

int main() {
  int m, n;
  scanf("%d %d", &m, &n);
  n -= 1;
  int *arr = (int*)malloc(sizeof(int) * n);
  for (int i = 0; i < n; i++) {
    arr[i] = i + 2;
  }
  for (int i = 2; i <= (n + 1); i++) {
    if (arr[i - 2] != 0) {
      for (int j = i * 2; j <= (n + 1); j += i) {
        arr[j - 2] = 0;
      }
    }
  }
  for (int i = 0; i < n; i++) {
    if (arr[i] >= m && arr[i] != 0) {
      printf("%d\n", arr[i]);
    }
  }
  free(arr);
  return 0;
}

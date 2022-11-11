#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main() {
  int n, m;
  int min = INT_MAX;
  scanf("%d %d", &n, &m);
  int *arr = (int*)malloc(sizeof(int) * n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &arr[i]);
  }
  for (int i = 0; i < n; i++) {
    for (int j = i + 1; j < n; j++) {
      for (int k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] <= m && m - (arr[i] + arr[j] + arr[k]) < min) min = m - (arr[i] + arr[j] + arr[k]);
      }
    }
  }
  printf("%d", m - min);
  free(arr);
  return 0;
}
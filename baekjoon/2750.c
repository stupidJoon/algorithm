#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b) {
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int main() {
  int n;
  scanf("%d", &n);
  int *arr = (int*)malloc(sizeof(int) * n);
  for (int i = 0; i < n; i++) {
    scanf("%d", &arr[i]);
  }
  for (int i = 0; i < n; i++) {
    int min = i;
    for (int j = i + 1; j < n; j++) if (arr[j] < arr[min]) min = j;
    if (min != i) swap(&arr[i], &arr[min]);
  }
  for (int i = 0; i < n; i++) {
    printf("%d\n", arr[i]);
  }
  free(arr);
  return 0;
}
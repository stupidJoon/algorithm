#include <stdio.h>

int main() {
  int n;
  int arr[10000] = { 0, };
  scanf("%d", &n);
  for (int i = 0; i < n; i++) {
    int v;
    scanf("%d", &v);
    arr[v - 1] += 1;
  }
  for (int i = 0; i < 10000; i++) {
    for (int j = 0; j < arr[i]; j++) printf("%d\n", i + 1);
  }
  return 0;
}
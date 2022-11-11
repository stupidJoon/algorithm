#include <stdio.h>
#include <stdlib.h>

int main() {
  int t;
  scanf("%d", &t);
  for (int i = 0; i < t; i++) {
    int k, n;
    scanf("%d %d", &k, &n);
    int **p = (int**)malloc(sizeof(int*) * (k + 1));
    for (int j = 0; j <= k; j++) {
      p[j] = (int*)malloc(sizeof(int) * n);
      for (int l = 0; l < n; l++) {
        if (j == 0) { p[j][l] = l + 1; }
        else {
          int sum = 0;
          for (int m = 0; m <= l; m++) { sum += p[j - 1][m]; }
          p[j][l] = sum;
        }
      }
    }
    printf("%d\n", p[k][n - 1]);
  }
  return 0;
}
#include <stdio.h>
#include <stdlib.h>

int main() {
  while (1) {
    int n;
    scanf("%d", &n);
    if (n == 0) break;
    int len = n * 2 - 1;
    int *arr = malloc(sizeof(int) * len);
    for (int i = 0; i < len; i++) {
      arr[i] = i + 2;
    }

    for (int i = 2; i <= (len + 1); i++) {
      if (arr[i - 2] != 0) {
        for (int j = i * 2; j <= (len + 1); j += i) {
          arr[j - 2] = 0;
        }
      }
    }

    // for (int i = n - 1; i < len; i++) {
    //   printf("%d ", arr[i]);
    // }
    
    int cnt = 0;
    for (int i = n - 1; i < len; i++) {
      if (arr[i] != 0) cnt += 1;
    }
    printf("%d\n", cnt);
  }
  return 0;
}
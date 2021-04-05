#include <stdio.h>
#include <stdlib.h>

int *primeSieve(int endNum, int *arr) {
  int len = endNum - 1;
  arr = (int*)malloc(sizeof(int) * len);
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
  return arr;
}

int *removeZero(int *arr, int *len) {
  int newLen = 0;
  for (int i = 0; i < *len; i++) {
    if (arr[i] != 0) newLen += 1;
  }
  int *newArr = malloc(sizeof(int) * newLen);
  int cnt = 0;
  for (int i = 0; i < *len; i++) {
    if (arr[i] != 0) {
      newArr[cnt] = arr[i];
      cnt += 1;
    }
  }
  free(arr);
  *len = newLen;
  return newArr;
}

void goldbach(int *arr, int len, int n) {
  int a = arr[0];
  int b = arr[len - 1];
  for (int i = 0; i < len; i++) {
    for (int j = 0; j < len; j++) {
      if (arr[i] + arr[j] == n && abs(arr[i] - arr[j]) < abs(a - b)) {
        a = arr[i];
        b = arr[j];
      }
    }
  }
  printf("%d %d\n", a, b);
}

int main() {
  int t;
  scanf("%d", &t);
  for (int i = 0; i < t; i++) {
    int n;
    scanf("%d", &n);
    int tmp = n;
    int *arr = primeSieve(n, arr);
    n -= 1;
    arr = removeZero(arr, &n);
    goldbach(arr, n, tmp);
    free(arr);
  }
  return 0;
}
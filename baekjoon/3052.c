#include <stdio.h>

int duplicateCheck(int *duplicateArr, int n) {
  for (int i = 0; i < 10; i++) {
    if (duplicateArr[i] == n) {
      return 1;
    }
  }
  return 0;
}

int main() {
  int duplicateArr[10];
  for (int i = 0; i < 10; i++) {
    duplicateArr[i] = -1;
  }
  int differenceNum = 0;
  for (int i = 0; i < 10; i++) {
    int a;
    scanf("%d", &a);
    if (!duplicateCheck(duplicateArr, a % 42)) {
      duplicateArr[i] = a % 42;
      differenceNum += 1;
    }
  }
  printf("%d", differenceNum);
  return 0;
}
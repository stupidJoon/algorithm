#include <stdio.h>

int find(char ch, char *arr, int end) {
  if (end <= 1) { return 0; }
  for (int i = 0; i < end && arr[i] != '\0'; i++) {
    if (arr[i] == ch && arr[i + 1] != arr[i]) {
      return 1;
    }
  }
  return 0;
}

int main() {
  int a;
  int sum = 0;
  scanf("%d", &a);
  for (int i = 0; i < a; i++) {
    char b[100];
    int j;
    scanf("%s", b);
    for (j = 0; b[j] != '\0'; j++) {
      if (find(b[j], b, j)) { break; }
    }
    if (b[j] == '\0') {
      sum += 1;
    }
  }
  printf("%d", sum);
  return 0;
}
#include <stdio.h>
#include <string.h>

int main() {
  char a[101];
  int b[26];
  memset(b, -1, sizeof(b));
  scanf("%s", a);
  for (int i = 0; a[i] != '\0' && i < 101; i++) {
    //printf("%d ", (int)(a[i] - 97));
    if (b[(int)(a[i] - 97)] == -1) { b[(int)(a[i] - 97)] = i; }
  }
  for (int i = 0; i < 26; i++) {
    printf("%d ", b[i]);
  }
  return 0;
}
#include <stdio.h>
#include <string.h>

int main() {
  char a[501];
  for (int i = 0;; i++) {
    gets(a);
    if (strcmp(a, "END") == 0) {
      break;
    }
    int j;
    for (j = 0; a[j] != '\0'; j++) {}
    for (j-=1; j >= 0; j--) { printf("%c", a[j]); }
    printf("\n");
  }
  return 0;
}
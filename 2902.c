#include <stdio.h>
#include <string.h>

int main() {
  char a[101];
  scanf("%s", a);
  char *b = strtok(a, "-");
  while (b != NULL) {
    printf("%c", b[0]);
    b = strtok(NULL, "-");
  }
  return 0;
}
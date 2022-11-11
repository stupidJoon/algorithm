#include <stdio.h>
#include <string.h>

int main() {
  int a, sum = 0;
  scanf("%d", &a);
  for (int i = 0; i < a + 1; i++) {
    char b;
    scanf("%c", &b);
    char c[] = { b, '\0' };
    sum += atoi(c);
  }
  printf("%d", sum);
  return 0;
}
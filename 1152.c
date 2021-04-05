#include <stdio.h>

int main() {
  char ch[1000000];
  int spaceCnt = 0;
  scanf("%[^\n]", ch);
  if (ch[0] == ' ' && ch[1] == '\0') {
    printf("0");
    return 0;
  }
  for (int i = 0; ch[i] != '\0'; i++) {
    if (ch[i] == ' ' && (i != 0 && ch[i + 1] != '\0')) {
      spaceCnt += 1;
    }
  }
  printf("%d", spaceCnt + 1);
  return 0;
}
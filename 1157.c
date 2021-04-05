#include <stdio.h>
#include <ctype.h>

int main() {
  char a[1000000];
  int b[26] = {0};
  scanf("%s", a);
  for (int i = 0; a[i] != '\0'; i++) {
    char c = tolower(a[i]);
    b[c - 97] += 1;
  }
  char mostAlphabet;
  int mostAlphabetCnt = 0;
  for (int i = 0; i < 26; i++) {
    if (b[i] == mostAlphabetCnt) {
      mostAlphabet = '?';
    }
    else if (b[i] > mostAlphabetCnt) {
      mostAlphabet = i + 97;
      mostAlphabetCnt = b[i];
    }
  }
  printf("%c", toupper(mostAlphabet));
  return 0;
}
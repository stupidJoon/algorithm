#include <stdio.h>

int twoCheck(char *a, int b) {
  if      (a[b] == 'c' && a[b + 1] == '=') { return 1; }
  else if (a[b] == 'c' && a[b + 1] == '-') { return 1; }
  else if (a[b] == 'd' && a[b + 1] == '-') { return 1; }
  else if (a[b] == 'l' && a[b + 1] == 'j') { return 1; }
  else if (a[b] == 'n' && a[b + 1] == 'j') { return 1; }
  else if (a[b] == 's' && a[b + 1] == '=') { return 1; }
  else if (a[b] == 'z' && a[b + 1] == '=') { return 1; }
  else { return 2; }
}
int threeCheck(char *a, int b) {
  if ((a[b] == 'd' && a[b + 1] == 'z') && a[b + 2] == '=') { return 1; }
  else { return 3; }
}

int main() {
  char a[101];
  int b = 0, c;
  scanf("%s", a);
  for (c = 0; a[c] != '\0'; c++) { }
  if (c == 1) { b = 1; }
  else if (c == 2) { b += twoCheck(a, 0); }
  else {
    for (int i = 0; a[i] != '\0'; i++) {
      if (threeCheck(a, i) == 1) { i += 2; }
      else if (twoCheck(a, i) == 1) { i += 1; }
      b += 1;
    }
  }
  printf("%d", b);
  return 0;
}
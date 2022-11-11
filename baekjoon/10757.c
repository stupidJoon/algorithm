#include <stdio.h>
#include <string.h>

void shiftArray(char *arr) {
  for (int i = 10000; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
}

int main() {
  char a[10001];
  char b[10001];
  char c[10002];
  int lenC = 0;
  int isCarried = 0;
  scanf("%s %s", a, b);
  int len = (strlen(a) > strlen(b)) ? strlen(b) : strlen(a);
  int diff = (strlen(a) > strlen(b)) ? strlen(a) - strlen(b) : strlen(b) - strlen(a);
  for (int i = 0; i < len; i++) {
    if (i != 0) { shiftArray(c); }
    c[0] = (a[strlen(a) - i - 1] - 48) + (b[strlen(b) - i - 1] - 48) + isCarried;
    isCarried = c[0] >= 10;
    if (c[0] >= 10) { c[0] -= 10; }
    lenC += 1;
  }
  for (int i = 0; i < diff; i++) {
    shiftArray(c);
    c[0] = (strlen(a) > strlen(b)) ? (a[strlen(a) - lenC - 1] - 48) + isCarried : (b[strlen(b) - lenC - 1] - 48) + isCarried;
    isCarried = c[0] >= 10;
    if (c[0] >= 10) { c[0] -= 10; }
    lenC += 1;
  }
  if (isCarried) {
    shiftArray(c);
    c[0] = 1;
    lenC += 1;
  }
  for (int i = 0; i < lenC; i++) {
    printf("%d", c[i]);
  }
  return 0;
}
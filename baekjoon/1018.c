#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>

int chessBoard(char **a) {
  char c;
  char **f = (char**)malloc(sizeof(char*) * 8);
  for (int i = 0; i < 8; i++) { f[i] = (char*)malloc(sizeof(char) * 9); memcpy(f[i], a[i], sizeof(char) * 9); }
  int d = 0, e = 0;
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++) {
      if (i == 0 && j == 0) { c = a[0][0]; }
      else if (j == 0) { if (a[i][0] == a[i - 1][0]) { d += 1; if (a[i - 1][0] == 'W') { a[i][0] = 'B'; } else { a[i][0] = 'W'; } } if (a[i - 1][0] == 'W') { c = 'B'; } else { c = 'W'; } }
      else {
        if (a[i][j] == a[i][j - 1]) { d += 1; if (a[i][j - 1] == 'W') { a[i][j] = 'B'; } else { a[i][j] = 'W'; } }
      }
    }
  }
  for (int i = 0; i < 8; i++) {
    for (int j = 0; j < 8; j++) {
      if (i == 0 && j == 0) { if (f[0][0] == 'W') { f[0][0] = 'B'; c = 'B'; } else { f[0][0] = 'W'; c = 'W'; } e += 1; }
      else if (j == 0) { if (f[i][0] == f[i - 1][0]) { e += 1; if (f[i - 1][0] == 'W') { f[i][0] = 'B'; } else { f[i][0] = 'W'; } } if (f[i - 1][0] == 'W') { c = 'B'; } else { c = 'W'; } }
      else {
        if (f[i][j] == f[i][j - 1]) { e += 1; if (f[i][j - 1] == 'W') { f[i][j] = 'B'; } else { f[i][j] = 'W'; } }
      }
    }
  }
  return (d > e) ? e : d;
}

int main() {
  int a, b, e = INT_MAX;
  scanf("%d %d", &a, &b);
  char **c = (char**)malloc(sizeof(char*) * a);
  for (int i = 0; i < a; i++) {
    c[i] = (char*)malloc(sizeof(char) * (b + 1));
    scanf("%s", c[i]);
  }
  for (int i = 0; a - i >= 8; i++) {
    for (int j = 0; b - j >= 8; j++) {
      char **d = (char**)malloc(sizeof(char*) * 8);
      for (int k = i; k < i + 8; k++) {
        d[k - i] = (char*)malloc(sizeof(char) * 9);
        for (int l = j; l < j + 8; l++) {
          d[k - i][l - j] = c[k][l];
        }
        d[k - i][8] = '\0';
      }
      int f = chessBoard(d);
      if (f < e) { e = f; }
    }
  }
  printf("%d", e);
  return 0;
}
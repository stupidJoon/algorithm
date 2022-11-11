#include <stdio.h>

int main() {
  int a;
  scanf("%d", &a);
  for (int i = 0; i < a; i++) {
    char b[80];
    int streak = 0;
    int score = 0;
    scanf("%s", b);
    for (int j = 0; b[j] != '\0'; j++) {
      if (b[j] == 'O') {
        score += streak + 1;
        streak += 1;
      }
      else {
        streak = 0;
      }
    }
    printf("%d\n", score);
  }
  return 0;
}
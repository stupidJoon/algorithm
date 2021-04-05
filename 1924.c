#include <stdio.h>

int main() {
  int a, b;
  scanf("%d %d", &a, &b);
  int c = b;
  for (int i = 1; i <= a - 1; i++) {
    if (i == 2) { c += 28; }
    else if ((i == 4 || i == 6) || (i == 9 || i == 11)) { c += 30; }
    else { c += 31; }
  }
  switch (c % 7) {
  case 0:
    printf("SUN");
    break;
  case 1:
    printf("MON");
    break;
  case 2:
    printf("TUE");
    break;
  case 3:
    printf("WED");
    break;
  case 4:
    printf("THU");
    break;
  case 5:
    printf("FRI");
    break;
  case 6:
    printf("SAT");
    break;
  }
  return 0;
}
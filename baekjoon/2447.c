// 3 == [1][1]
// 9 == [3][3]
// 27 == [9][9]

//1

//1 1 1
//1 0 1
//1 1 1

//1 1 1 1 1 1 1 1 1
//1 0 1 1 0 1 1 0 1
//1 1 1 1 1 1 1 1 1
//1 1 1 0 0 0 1 1 1
//1 0 1 0 0 0 1 0 1
//1 1 1 0 0 0 1 1 1
//1 1 1 1 1 1 1 1 1
//1 0 1 1 0 1 1 0 1
//1 1 1 1 1 1 1 1 1

#include <stdio.h>
#include <stdlib.h>

int **starMaker(int n) {
  int **arr;
  if (n == 1) {
    arr = (int**)malloc(sizeof(int*) * 1);
    arr[0] = (int*)malloc(sizeof(int) * 1);
    arr[0][0] = 1;
  }
  else {
    arr = (int**)malloc(sizeof(int*) * n);
    for (int i = 0; i < n; i++) {
      arr[i] = (int*)malloc(sizeof(int) * n);
    }
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        int **insideArr = starMaker(n / 3);
        if (i == 1 && j == 1) {
          for (int k = 0; k < (n / 3); k++) {
            for (int l = 0; l < (n / 3); l++) {
              arr[i * (n / 3) + k][j * (n / 3) + l] = 0;
            }
          }
        }
        else {
          for (int k = 0; k < (n / 3); k++) {
            for (int l = 0; l < (n / 3); l++) {
              arr[i * (n / 3) + k][j * (n / 3) + l] = insideArr[k][l];
            }
          }
        }
        free(insideArr);
      }
    }
  }
  return arr;
}

int main() {
  int n;
  scanf("%d", &n);
  int **arr = starMaker(n / 3);

  // for (int i = 0; i < (n / 3); i++) {
  //   for (int j = 0; j < (n / 3); j++) {
  //     printf("%d ", arr[i][j]);
  //   }
  //   printf("\n");
  // }

  // int arr[1][1] = {
  //   { 1 }
  // };
  // int n = 3;
  // int arr[3][3] = {
  //   { 1, 1, 1 },
  //   { 1, 0, 1 },
  //   { 1, 1, 1 }
  // };
  // int n = 9;
  // int arr[9][9] = {
  //   { 1, 1, 1, 1, 1, 1, 1, 1, 1 },
  //   { 1, 0, 1, 1, 0, 1, 1, 0, 1 },
  //   { 1, 1, 1, 1, 1, 1, 1, 1, 1 },
  //   { 1, 1, 1, 0, 0, 0, 1, 1, 1 },
  //   { 1, 0, 1, 0, 0, 0, 1, 0, 1 },
  //   { 1, 1, 1, 0, 0, 0, 1, 1, 1 },
  //   { 1, 1, 1, 1, 1, 1, 1, 1, 1 },
  //   { 1, 0, 1, 1, 0, 1, 1, 0, 1 },
  //   { 1, 1, 1, 1, 1, 1, 1, 1, 1 }
  // };
  // int n = 27;

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < (n / 3); j++) {
      if (arr[i / 3][j] == 1) {
        if ((i - 1) % 3 == 0) { printf("* *"); }
        else { printf("***"); }
      }
      else { printf("   "); }
    }
    printf("\n");
  }
  
  free(arr);
  return 0;
}

// 3 == [1][1]
// 9 == [3][3]
// 27 == [9][9]

//1

//1 1 1
//1 0 1
//1 1 1

//1 1 1 1 1 1 1 1 1
//1 0 1 1 0 1 1 0 1
//1 1 1 1 1 1 1 1 1
//1 1 1 0 0 0 1 1 1
//1 0 1 0 0 0 1 0 1
//1 1 1 0 0 0 1 1 1
//1 1 1 1 1 1 1 1 1
//1 0 1 1 0 1 1 0 1
//1 1 1 1 1 1 1 1 1

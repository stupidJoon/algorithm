#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int findBestBuild(int **arr, int arrLen, int **grade, int gradeLen) {
  realloc(grade, sizeof(int*) * gradeLen + 1);
  int weightMax = INT_MIN;
  for (int i = 0; i < arrLen; i++) {
    if (arr[i][0] > weightMax) weightMax = arr[i][0];
  }
  int heightMax = INT_MIN;
  for (int i = 0; i < arrLen; i++) {
    if (arr[i][0] == weightMax && arr[i][1] > heightMax) heightMax = arr[i][1];
  }
  int bestGradeLen = 0;
  for (int i = 0; i < arrLen; i++) {
    if (arr[i][0] == weightMax) {
      realloc(grade[gradeLen], sizeof(int) * bestGradeLen + 1);
      bestGradeLen += 1;
    }
  }
  gradeLen += 1;
}

int main() {
  int n;
  scanf("%d", &n);
  int **arr = (int**)malloc(sizeof(int*) * n);
  for (int i = 0; i < n; i++) {
    arr[i] = (int*)malloc(sizeof(int) * 2);
    scanf("%d %d", &arr[i][0], &arr[i][1]);
  }
  // for (int i = 0; i < n; i++) {
  //   printf("%d %d\n", arr[i][0], arr[i][1]);
  // }



  return 0;
}

// 1. 가장 큰 몸무게 찾기
// 2. 가장 큰 키 찾기
// 3. 가장 큰 몸무게 같은놈 1등급으로 올리기
// 4. 가장 큰 키 같은놈 1등급으로 올리기
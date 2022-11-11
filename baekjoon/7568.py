import copy

n = int(input())
personList = []
buildGrade = []
for _ in range(0, n):
  personList.append(list(map(int, input().split())))
tmp = copy.deepcopy(personList)

while len(personList) != 0:
  maxWeight = max(list(map(lambda x: x[0], personList)))
  maxHeight = max(list(map(lambda x: x[1], personList)))
  minWeight = min(list(map(lambda x: x[0], list(filter(lambda x: x[1] == maxHeight, personList)))))
  minHeight = min(list(map(lambda x: x[1], list(filter(lambda x: x[0] == maxWeight, personList)))))
  buildGrade.append(list(filter(lambda x: (x[0] >= minWeight) or (x[1] >= minHeight), personList)))
  personList = list(filter(lambda x: (x[0] < minWeight) and (x[1] < minHeight), personList))

for person in tmp:
  index = 0
  for gradeIndex, grade in enumerate(buildGrade):
    for personGradeIndex, personGrade in enumerate(grade):
      if person == personGrade:
        print(gradeIndex + index + 1, end=' ')
        break
    index += len(grade) - 1

# 1. 가장 큰 몸무게 찾기
# 2. 가장 큰 키 찾기
# 3. 가장 큰 몸무게 같은놈 1등급으로 올리기
# 4. 가장 큰 키 같은놈 1등급으로 올리기
#[[A], [B, C ,D], [E]]

# [[[88, 186]], [[55, 185], [58, 183], [60, 175]], [[46, 155]]]
# [grade, [personGrade, personGrade, personGrade], [personGrade]]
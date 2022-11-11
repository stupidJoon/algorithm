n = int(input())
arr = []
for _ in range(n):
  arr.append(int(input()))

print(round(sum(arr) / n))

arr.sort()
print(arr[int(n / 2)])

dic = dict.fromkeys(set(arr), 0)
for i in arr:
  dic[i] += 1
oftenValues = list(filter(lambda x: x[1] == max(list(dic.values())), dic.items()))
oftenValues.sort(key=lambda x: x[0])
if (len(oftenValues) == 1):
  print(oftenValues[0][0])
else:
  print(oftenValues[1][0])

print(max(arr) - min(arr))

import heapq

t = int(input())

for i in range(t):
    k = int(input())
    minH, maxH = [], []
    visited = [False] * k

    for j in range(k):
        com, num = input().split()

        if com == 'I':
            heapq.heappush(minH, (int(num), j))
            heapq.heappush(maxH, (-int(num), j))
            visited[j] = True

        else:
            if num == '1':
                while maxH and not visited[maxH[0][1]]:
                    heapq.heappop(maxH)
                if maxH:
                    visited[maxH[0][1]] = False
                    heapq.heappop(maxH)
            else:
                while minH and not visited[minH[0][1]]:
                    heapq.heappop(minH)
                if minH:
                    visited[minH[0][1]] = False
                    heapq.heappop(minH)

    while minH and not visited[minH[0][1]]:
        heapq.heappop(minH)
    while maxH and not visited[maxH[0][1]]:
        heapq.heappop(maxH)

    if not minH or not maxH:
        print('EMPTY')
    else:
        print(-maxH[0][0], minH[0][0])
    
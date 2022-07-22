const m = ['4', '1', '2'];

function solution(n) {
    const arr = [];
    while (n > 0) {
        arr.push(m[n % 3]);
        n = Math.floor((n - 1) / 3);
    }
    return arr.reverse().join('');
}


/*
10진수 124진수 3진수
1 1 1
2 2 2
3 4 10

4 11 11
5 12 12
6 14 20

7 21 21
8 22 22
9 24 100

10 41 101
11 42 102
12 44 110

13 111 111
14 112 112
15 114 120
*/
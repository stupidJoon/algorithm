function solution(n)
{
    let count = 0;
    while (n > 0) {
        if (n % 2) {
            n -= 1;
            count += 1;
        } else {
            n /= 2;
        }
    }
    return count;
}
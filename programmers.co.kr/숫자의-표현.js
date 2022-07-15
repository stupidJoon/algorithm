function solution(n) {
    let count = 0;
    for (let i = 1; i <= n; i += 1) {
        let sum = 0;
        for (let j = i; j <= n; j += 1) {
            sum += j;
            if (sum === n) {
                count += 1;
                break;
            }
            if (sum > n) break;
        }
    }
    return count;
}
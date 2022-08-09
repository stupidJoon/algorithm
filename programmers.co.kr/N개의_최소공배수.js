function solution(arr) {
    let i;
    for (i = Math.max(...arr); arr.some((v) => i % v > 0); i += 1);
    return i;
}
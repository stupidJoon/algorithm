function solution(n) {
    const count = n.toString(2).split('').filter((v) => v === '1').length;
    let i = n + 1;
    for (;; i += 1) {
        if (i.toString(2).split('').filter((v) => v === '1').length === count) {
            break;
        }
    }
    return i;
}
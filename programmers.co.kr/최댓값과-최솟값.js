function solution(s) {
    const arr = s.split(' ').map(Number);
    return [Math.min(...arr), Math.max(...arr)].map((v) => v.toString()).join(' ');
}
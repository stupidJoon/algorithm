function solution(arrangement) {
    let depth = 0;
    let count = 0;
    for (let i = 0; i < arrangement.length; i += 1) {
        if (arrangement[i] === '(' && arrangement[i + 1] === ')') {
            count += depth;
            i += 1;
        }
        else if (arrangement[i] === '(') {
            depth += 1;
        }
        else if (arrangement[i] === ')') {
            depth -= 1;
            count += 1;
        }
    }
    return count;
}
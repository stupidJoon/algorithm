function solution(number, k) {
    const stack = [];
    for (let i = 0; i < number.length; i += 1) {
        const n = Number(number[i]);
        while (k > 0 && stack[stack.length - 1] < n) {
            stack.pop();
            k -= 1;
        }
        stack.push(n);
    }
    return stack.slice(0, stack.length - k).join('');
}
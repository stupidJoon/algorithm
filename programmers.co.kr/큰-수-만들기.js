function solution(number, k) {
    number = number.split('').map(Number);
    let stack = [];
    
    for (const num of number) {
        while (num > stack.at(-1) && k > 0) {
            stack.pop();
            k -= 1;
        }
        stack.push(num);
    }
    
    if (k > 0) {
        stack = stack.slice(0, -k);
    }
    
    return stack.join('');
}

// 4 1 7 7 2 5 2 8 4 1
// 4, 41, 417->47->7, 77, 772, 7725->775, 7752, 77528->7758, 775841
// 


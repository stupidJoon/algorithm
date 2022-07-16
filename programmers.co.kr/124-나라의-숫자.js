const m = {
    1: '1',
    2: '2',
    3: '4'
};

function solution(n) {
    if (n < 3) {
        return m[n];
    }
    let head = (Math.floor(n / 3) - ((n % 3 === 0) ? 1 : 0)).toString(3);
    
    head = head + '';
    head = head.split('')
    console.log(head)
    head = head.map((v) => m[v]);
    const tail = (n % 3) + ((n % 3 === 0) ? 3 : 0);
    
    return Number(head.join('') + m[tail]).toString();
}


// 0으로 나누어 떨어지면 head - 1, tail + 3
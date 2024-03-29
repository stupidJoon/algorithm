function solution(n, k) {
    return n.toString(k).split('0').map(Number).filter(isPrime).length;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}
function isPrime(n) {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const binary = n.toString(k);
    return binary.split('0').filter((value) => value != 0).filter((value) => isPrime(parseInt(value))).length;
}

console.log(solution(437674, 3));
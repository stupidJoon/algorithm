function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            for (let k = j + 1; k < nums.length; k += 1) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) count += 1;
            }
        }
    }
    return count;
}
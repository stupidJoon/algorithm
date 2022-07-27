function solution(n,a,b)
{
    for (let i = 1;; i += 1) {
        if (Math.ceil(a / 2) === Math.ceil(b / 2)) {
            return i;
        }
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
    }
    
}
function solution(s) {
    let src = s.split('');
    let dst = [];
    while (src.length > 0) {
        for (let i = 0; i < src.length; i += 1) {
            const top = dst[dst.length - 1];
            if (src[i] === top) {
                dst.pop();
            } else {
                dst.push(src[i]);
            }
        }
        if (src.every((v, i) => v === dst[i])) {
            return 0;
        }
        src = dst;
        dst = [];
    }
    return 1;
}

// baccabacca
// baabaa
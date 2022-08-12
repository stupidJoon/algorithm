function solution(baseball) {
    let possibleNumbers = [];
    for (let i = 1; i < 10; i += 1) {
        for (let j = 1; j < 10; j += 1) {
            if (i === j) continue;
            for (let k = 1; k < 10; k += 1) {
                if (i === k || j === k) continue;
                possibleNumbers.push([i, j, k]);
            }
        }
    }
    baseball.forEach(([n, s, b]) => {
        const abc = n.toString().split('').map(Number);
        
        possibleNumbers = possibleNumbers.filter((value) => {
            const strikes = value.reduce((acc, val, idx) => acc + (val === abc[idx]), 0);
            const strikesAndBall = value.reduce((acc, val, idx) => acc + (abc.includes(val)), 0);
            return (strikes === s) && (strikesAndBall - strikes === b);
        });
    });

    return possibleNumbers.length;
}
function solution(number, k) {
    let n = k;
    let arr = number.split('').map(Number);
    for (let i = 0; n > 0; i += 1) {

        if (arr.length - i === n) {
            arr = arr.slice(0, i);
            break;
        }

        if (arr[i] === 9) continue;

        const availableArr = arr.slice(i, i + n + 1);
        
        // const max = Math.max(...availableArr)
        let max = Number.MIN_SAFE_INTEGER;
        for (let j = 0; j < availableArr.length; j += 1) {
            if (availableArr[j] > max) max = availableArr[j];
        }

        const maxIndex = availableArr.indexOf(max);
        
        // arr = [...arr.slice(0, i), ...arr.slice(i + maxIndex)];
        const temp = [];
        for (let j = 0; j < i; j += 1) {
            temp.push(arr[j]);
        }
        for (let j = i + maxIndex; j < arr.length; j += 1) {
            temp.push(arr[j]);
        }
        arr = temp;

        n -= maxIndex;
    }
    return arr.join('');
}

console.log(solution('654321'))

/*
입력: "654321" , k = 1 // 결과: "65432"
입력: "654321", k = 5 // 결과: "6"
*/
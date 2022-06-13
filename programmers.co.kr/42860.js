function solution(name) {
    const arr = Array.from({ length: name.length }, () => 'A');
    let index = 0;
    let count = 0;
    while (arr.join('') !== name) {
        const forward = name[index].charCodeAt(0) - 'A'.charCodeAt(0);
        const reverse = 'A'.charCodeAt(0) - name[index].charCodeAt(0) + 26;
        arr[index] = name[index];
        count += (forward > reverse) ? reverse : forward;

        if (arr.join('') === name) break;

        let leftACount = 0;
        let i = index - 1;
        if (i < 0) i = arr.length - 1;
        while (arr[i] === name[i]) {
            leftACount += 1;
            i -= 1;
            if (i < 0) i = arr.length - 1;
        }
        let rightACount = 0;
        i = index + 1;
        if (i >= arr.length) i = 0;
        while(arr[i] === name[i]) {
            rightACount += 1;
            i += 1;
            if (i >= arr.length) i = 0;
        }

        if (leftACount < rightACount) {
            count += leftACount + 1;
            index -= leftACount + 1;
            if (index < 0) index = arr.length + index;
        } else {
            count += rightACount + 1;
            index += rightACount + 1;
            if (index >= arr.length) index = index - array.length - 1;
        }
    }
    return count;
}

console.log(solution('JAN'));
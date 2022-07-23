function solution(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i += 1) {
        const arr = [];
        for (let j = 0; j < arr2[0].length; j += 1) {
            let temp = 0;
            for (let k = 0; k < arr1[0].length; k += 1) {
                temp += arr1[i][k] * arr2[k][j];
            }
            arr.push(temp);
        }
        result.push(arr);
    }
    return result;
}
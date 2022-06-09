const [N, r, c] = [2, 3, 1];

function f(size, pos, [baseRow, baseCol]) {
    let insideSize = pow(2, size - 1)
    if (size === 1) {
        if (baseRow === )
    }
    f(size - 1, 0, [baseRow, baseCol]);
    f(size - 1, 1, [baseRow, baseCol + insideSize]);
    f(size - 1, 2, [baseRow + insideSize, baseCol]);
    f(size - 1, 3, [baseRow + insideSize, baseCol + insideSize]);
}

f(2, 0, [0, 0]);
f(2, 0, [0, 2]);
f(2, 0, [2, 0]);
f(2, 0, [2, 2]);

// 아 하기싫어
// 미래의 내가 해줘 ㅋㅋㅋㅋㅋ
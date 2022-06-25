const [N, r, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function z(row, col, n, index) {
    if (n === 2) {
        [[row, col], [row, col + 1], [row + 1, col], [row + 1, col + 1]]
            .forEach(([nr, nc], i) => {
                if (nr === r && nc === c) {
                    console.log(index + i);
                }
            });
    } else {
        if (r < row +  n / 2) {
            if (c < col + n / 2) {
                z(row, col, n / 2, index);
            } else {
                z(row, col + n / 2, n / 2, index + Math.pow(n / 2, 2));
            }
        } else {
            if (c < col + n / 2) {
                z(row + n / 2, col, n / 2, index + Math.pow(n / 2, 2) * 2);
            } else {
                z(row + n / 2, col + n / 2, n / 2, index + Math.pow(n / 2, 2) * 3);
            }
        }
    }
}

z(0, 0, Math.pow(2, N), 0);
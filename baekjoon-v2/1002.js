const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);

console.log(
  input.map((line) => {
    const [x1, y1, r1, x2, y2, r2] = line.split(' ').map(Number);

    const distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

    // 원 안에서 또는 원 밖에서 2점 만나기
    if (Math.abs(r1 - r2) < distance && r1 + r2 > distance) {
      return 2;
    }
    // 원 밖, 안에서 1점 만나기(외접, 내접)
    if (r1 + r2 === distance || (Math.abs(r1 - r2) === distance && distance !== 0)) {
      return 1;
    }
    // 원 안에서 or 밖에서 안만나기
    if (Math.abs(r1 - r2) > distance || r1 + r2 < distance) {
      return 0;
    }
    // 원이 일치하기
    if (r1 === r2 && distance === 0) {
      return -1;
    }
    // 원 중앙은 같고 크기는 다르기
    if (r1 === r2) {
      return 0;
    }
  }).join('\n')
);

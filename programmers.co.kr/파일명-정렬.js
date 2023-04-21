function solution(files) {
  const result = [];
  for (const file of files) {
    let numStartIndex, numEndIndex;
    for (let i = 0; i < file.length; i += 1) {
      if (file[i] === ' ') continue;
      if (!isNaN(Number(file[i]))) {
        numStartIndex = i;
        for (let j = i; j < file.length; j += 1) {
          if (file[j] === ' ') break;
          if (isNaN(Number(file[j]))) break;
          numEndIndex = j;
        }
        break;
      }
    }
    result.push([
      file.slice(0, numStartIndex),
      file.slice(numStartIndex, numEndIndex + 1),
      file.slice(numEndIndex + 1)
    ]);
  }
  result.sort((a, b) => {
    const a0 = a[0].toUpperCase();
    const b0 = b[0].toUpperCase();
    if (a0 !== b0) {
      return a0.localeCompare(b0);
    }

    const a1 = Number(a[1]);
    const b1 = Number(b[1]);
    if (a1 !== b1) {
      return a1 - b1;
    }

    return 0;
  });
  return result.map(v => v.join(''));
}

console.log(
  solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])
);

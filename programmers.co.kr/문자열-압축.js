function solution(s) {
  if (s.length === 1) return 1;

  let min = 1000;
  for (let length = 1; length <= s.length / 2; length += 1) {
    let str = '';
    for (let i = 0; i < s.length;) {
      const baseString = s.slice(i, i + length);
      let count = 1;
      for (i += length; s.slice(i, i + length) === baseString; i += length) {
        count += 1;
      }
      if (count === 1) str += baseString;
      else str += count + baseString;
    }
    min = Math.min(min, str.length);
  }

  return min;
}

solution("a");

// ab ab ab cc ab
// 3ab cc ab

// cc ab ab cc ab
// cc 2ab cc ab

function solution(m, musicinfos) {
  for (const musicinfo of musicinfos) {
    const [src, dst, title, desc] = musicinfo.split(',')

    let sample = '';
    let i;
    for (i = 0; i < m.length; i += 1) {
      sample += desc[i % desc.length];
    }

    for (i = 0; i < desc.length; i += 1) {
      console.log(sample)
      if (sample === m) return title;
      sample = sample.slice(1) + desc[(i + m.length) % desc.length];
    }
  }

  return '(None)';
}

console.log(
  // solution("ABCDEFG",	["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]),
  solution("ABC",	["12:00,12:14,HELLO,C#DEFGAB"])
);

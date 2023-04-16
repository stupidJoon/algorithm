function solution(m, musicinfos) {
  m = split(m);
  const results = [];

  for (const musicinfo of musicinfos) {
    let [src, dst, title, desc] = musicinfo.split(',')
    src = src.split(':').map(Number);
    dst = dst.split(':').map(Number);
    desc = split(desc);
    const time = (dst[0] - src[0]) * 60 + (dst[1] - src[1]);
    const melody = [
      ...Array(Math.floor(time / desc.length)).fill(desc).flat(),
      ...desc.slice(0, time % desc.length)
    ];

    for (let i = 0; i < melody.length - m.length + 1; i += 1) {
      if (melody[i] === m[0] && melody.slice(i, i + m.length).every((v, i) => v === m[i])) {
        results.push([title, time]);
      }
    }
  }

  if (results.length === 0) return '(None)';

  results.sort((a, b) => b[1] - a[1]);

  return results[0][0];
}

function split(str) {
  const arr = [];
  for (let i = 0; i < str.length;) {
    if (str[i + 1] === '#') {
      arr.push(str[i] + str[i + 1]);
      i += 2;
    } else {
      arr.push(str[i]);
      i += 1;
    }
  }
  return arr;
}

console.log(
  // solution("ABCDEFG",	["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]),
  // solution("CC#BCC#BCC#BCC#B",	["04:00,04:08,BAR,CC#BCC#BCC#B"]),
  solution("ABC",	["12:00,12:14,HELLO,C#DEFGAB"])
);

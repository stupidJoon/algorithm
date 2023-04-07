function splitUV(s) {
  let i;
  let [l, r] = [0, 0];
  for (i = 0; i < s.length; i++) {
      if (s[i] === '(') l += 1;
      if (s[i] === ')') r += 1;
      if (l === r) break;
  }
  return [s.slice(0, i + 1), s.slice(i + 1)];
}

function isValid(s) {
  let count = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') count += 1;
    if (s[i] === ')') count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}

function f(s) {
  // 1.
  if (s === '') return '';
  // 2.
  const [u, v] = splitUV(s);
  // 3.
  if (isValid(u)) return u + f(v);
  // 4.
  let result = '(';
  result += f(v);
  result += ')';
  result += u.slice(1, -1).split('').map(v => (v === '(') ? ')' : '(').join('');
  return result;
}

function solution(p) {
  return f(p);
}

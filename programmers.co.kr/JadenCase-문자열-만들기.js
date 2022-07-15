function solution(s) {
    return s.split(' ').map((s) => (s[0] || '').toUpperCase() + (s.slice(1) || '').toLowerCase()).join(' ');
}
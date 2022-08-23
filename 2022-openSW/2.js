const result = [];
const currentIp = {};
const historyIp = {};
let ipMap;
let ipHistoryMap;
let N;

function req(desktop) {
  if (historyIp[desktop]) {
    // ip 할당받았던적이 있는 컴퓨터
    // 4)
    if (ipMap.every((v) => v === true)) {
      return -1;
    }
    // 3)
    if (ipHistoryMap.every((v) => v === true)) {
      for (let i = 0; i < N; i += 1) {
        if (ipMap[i] === false) return i;
      }
    }
    // 2)
    if (ipMap[historyIp[desktop]] === true) {
      for (let i = 0; i < N; i += 1) {
        if (ipHistoryMap[i] === false) return i;
      }
    }
    // 1)
    return historyIp[desktop];
  } else {
    // ip 할당받았던적이 없는 컴퓨터
    // 3)
    if (ipMap.every((v) => v === true)) {
      return -1;
    }
    // 2)
    if (ipHistoryMap.every((v) => v === true)) {
      for (let i = 0; i < N; i += 1) {
        if (ipMap[i] === false) return i;
      }
    }
    // 1)
    for (let i = 0; i < N; i += 1) {
      if (ipHistoryMap[i] === false) return i;
    }
  }
}

function solution(n, queries) {
  N = n;
  ipMap = Array.from({ length: N }, () => false);
  ipHistoryMap = Array.from({ length: N }, () => false);
  for (let i = 0; i < queries.length; i += 1) {
    const [desktop, command] = queries[i].split(' ');
    if (command === 'request') {
      const ip = req(desktop);
      if (ip === -1) {
        result.push(`${desktop} reject`);
      } else {
        currentIp[desktop] = ip;
        historyIp[desktop] = ip;
        ipMap[ip] = true;
        ipHistoryMap[ip] = true;
        result.push(`${desktop} 192.168.0.${ip + 1}`);
      }
    } else {
      const ip = currentIp[desktop];
      currentIp[desktop] = false;
      ipMap[ip] = false;
    }
  }
  return result;
}

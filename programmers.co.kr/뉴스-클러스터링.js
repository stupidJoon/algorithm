function solution(str1, str2) {
  const arr1 = split(str1.toUpperCase());
  const arr2 = split(str2.toUpperCase());

  const m1 = arr1.reduce((acc, val) => {
    acc[val] = (acc[val] === undefined) ? 1 : acc[val] + 1
    return acc;
  }, {});
  const m2 = arr2.reduce((acc, val) => {
    acc[val] = (acc[val] === undefined) ? 1 : acc[val] + 1
    return acc;
  }, {});

  const intersection = Object.entries(m1).reduce((acc, [k, v]) => acc + Math.min(v, m2[k] ?? 0), 0);
  const union = (
    Object.
      entries(m1).
      reduce((acc, [k, v]) => acc + ((m2[k] === undefined) ? 0 : Math.max(v, m2[k] ?? 0)), 0)
    +
    Object
      .entries(m1)
      .reduce((acc, [k, v]) => acc + ((m2[k] === undefined) ? v : 0), 0)
    +
    Object
      .entries(m2)
      .reduce((acc, [k, v]) => acc + ((m1[k] === undefined) ? v : 0), 0)
  )

  if (union === 0) return 65536;

  return Math.floor(intersection / union * 65536);
}

function split(str) {
  const result = [];
  for (let i = 1; i < str.length; i += 1) {
    if (
      str.charCodeAt(i - 1) >= 65 && str.charCodeAt(i - 1) <= 90 &&
      str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90
    ) {
      result.push(str[i - 1] + str[i]);
    }
  }
  return result;
}

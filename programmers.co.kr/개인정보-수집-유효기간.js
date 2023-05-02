function solution(today, terms, privacies) {
  today = today.split('.').map(Number);
  terms = Object.fromEntries(terms.map(v => v.split(' ')).map(([a, b]) => [a, Number(b)]));
  privacies = privacies.map(v => v.split(' '));
  privacies = privacies.map(([a, b]) => [a.split('.').map(Number), b]);

  return privacies.flatMap(([date, privacy], index) => {
    date[2] -= 1;
    if (date[2] === 0) {
      date[1] -= 1;
      date[2] = 28;
    }

    date[1] += terms[privacy];
    if (date[1] > 12) {
      date[0] += Math.floor(date[1] / 12);
      date[1] = date[1] % 12;

      if (date[1] === 0) {
        date[0] -= 1;
        date[1] = 12;
      }
    }

    if (date[0] > today[0]) return [];
    else if (date[0] < today[0]) return [index + 1];
    else {
      if (date[1] > today[1]) return [];
      else if (date[1] < today[1]) return [index + 1];
      else {
        if (date[2] >= today[2]) return [];
        else return [index + 1];
      }
    }
  });
}

console.log(
  // solution("2022.05.19", ["A 6", "B 12", "C 3"],	["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]),
  solution("2020.01.01",	["D 100"],	["2019.01.01 D"])
);

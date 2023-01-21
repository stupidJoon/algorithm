function solution(enrolls, referrals, sellers, amounts) {
  const referralMap = enrolls.reduce((acc, v, i) => {
    acc[v] = referrals[i];
    return acc;
  }, {});

  const balanceMap = enrolls.reduce((acc, v) => {
    acc[v] = 0;
    return acc;
  }, {});

  for (let i = 0; i < sellers.length; i += 1) {
    const [s, a] = [sellers[i], amounts[i] * 100];
    f(s, a);
  }

  return Object.values(balanceMap);

  function f(seller, amount) {
    if (seller === '-') return;
    if (amount === 0) return;

    const referral = referralMap[seller];
    const amount10 = Math.floor(amount / 10);
    const amount90 = amount - amount10;

    balanceMap[seller] += amount90;

    f(referral, amount10);
  }
}

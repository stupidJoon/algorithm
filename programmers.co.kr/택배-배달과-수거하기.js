function solution(cap, n, deliveries, pickups) {
  let minLen = 0;
  let isDeliveryComplete = false;
  let isPickupComplete = false;
  while (deliveries.some(v => v > 0) || pickups.some(v => v > 0)) {
    let maxPoint = 0;
    let sum = 0;

    if (isDeliveryComplete === false) {
      isDeliveryComplete = true;
      for (let i = n - 1; i >= 0; i -= 1) {
        if (deliveries[i] === 0) continue;
        maxPoint = (maxPoint > i) ? maxPoint : i;
        sum += deliveries[i];
        if (sum > cap) {
          deliveries[i] = sum - cap;
          isDeliveryComplete = false;
          break;
        }
        deliveries[i] = 0;
      }
    }

    sum = 0;
    if (isPickupComplete === false) {
      isPickupComplete = true;
      for (let i = n - 1; i >= 0; i -= 1) {
        if (pickups[i] === 0) continue;
        maxPoint = (maxPoint > i) ? maxPoint : i;
        sum += pickups[i];
        if (sum > cap) {
          pickups[i] = sum - cap;
          isPickupComplete = false;
          break;
        }
        pickups[i] = 0;
      }
    }

    minLen += (maxPoint + 1) * 2;

    n = maxPoint + 1;
  }
  return minLen;
}


console.log(
  solution(4, 5, [1, 0, 3, 1, 2],	[0, 3, 0, 4, 0])
)

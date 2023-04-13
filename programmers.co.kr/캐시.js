function solution(cacheSize, cities) {
  let cache = [];
  let time = 0;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.includes(city)) time += 1;
    else time += 5;

    if (cache.length < cacheSize) {
      cache.push(city);
    } else {
      const beforeLength = cache.length;
      cache = cache.filter(v => v !== city);
      if (beforeLength === cache.length) {
        cache = [...cache.slice(1), city];
      } else {
        cache = [...cache, city];
      }
    }
  }

  return time
}

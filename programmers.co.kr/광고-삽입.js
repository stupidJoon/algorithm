function timeToSeconds(s) {
  const [hours, minutes, seconds] = s.split(':').map(Number);
  return hours * 60 * 60 + minutes * 60 + seconds;
}
function secondsToTime(s) {
  const seconds = s % 60;
  s = s - seconds;
  const minutes = (s / 60) % 60;
  s = s - minutes * 60;
  const hours = s / 3600;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function solution(play_time, adv_time, logs) {
  play_time = timeToSeconds(play_time);
  adv_time = timeToSeconds(adv_time);
  logs = logs.map(s => s.split('-').map(timeToSeconds));

  const startTimes = new Set();
  const endTimes = new Set();

  logs.forEach(([src, dst]) => {
    startTimes.add(src);
    endTimes.add(dst);
  })

  const prefixSum = [0];
  let views = 0;

  for (let time = 1; time <= play_time; time += 1) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + views);
    if (startTimes.has(time)) views += 1;
    if (endTimes.has(time)) views -= 1;
  }

  console.log(prefixSum)

  let max = [0, 0];
  for (let endTime = adv_time; endTime <= play_time; endTime += 1) {
    const startTime = endTime - adv_time;
    const sum = prefixSum[endTime] - prefixSum[startTime];

    if (sum > max[1]) max = [startTime, sum];
  }

  console.log(secondsToTime(max[0]))
}

// 같은 시간에 2명 이상이 시청 시작하거나 끝낼 수 있는 가능성
// 00:00:00 부터 시청 시작할 가능성

// solution("02:03:55",	"00:14:15",	["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"])
// solution("99:59:59",	"25:00:00", ["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"]);
// solution("50:00:00",	"50:00:00",	["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"]);

// solution("00:00:10", "00:00:02", ["00:00:01-00:00:02", "00:00:02-00:00:03"]);

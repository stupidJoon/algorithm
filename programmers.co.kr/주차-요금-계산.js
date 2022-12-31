function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const timeMap = {};
    const inMap = {};
    for (let i = 0; i < records.length; i += 1) {
        const [time, number, io] = records[i].split(' ');
        if (!timeMap[number]) timeMap[number] = 0;
        if (io === 'IN') {
            inMap[number] = time;
        } else {
            const srcTime = inMap[number].split(':').map(Number);
            const dstTime = time.split(':').map(Number);
            const diff = (dstTime[0] * 60 + dstTime[1]) - (srcTime[0] * 60 + srcTime[1]);
            timeMap[number] += diff

            delete inMap[number];
        }
    }
    Object.entries(inMap).forEach(([number, time]) => {
        const srcTime = time.split(':').map(Number);
        const diff = (23 * 60 + 59) - (srcTime[0] * 60 + srcTime[1]);
        timeMap[number] += diff;
    });

    const results = Object.entries(timeMap).map(([num, time]) => {
        return [
            num,
            (time <= baseTime) ? baseFee : baseFee + Math.ceil((time - baseTime) / unitTime) * unitFee,
        ];
    }).sort((a, b) => Number(a[0]) - Number(b[0]));

    return results.map(v => v[1]);
}


console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]))

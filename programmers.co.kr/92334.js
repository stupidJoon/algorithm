function solution(id_list, report, k) {
    const reportCounts = [...id_list].fill(0);
    const reportList = [...id_list].fill([]);

    for (let i = 0; i < report.length; i += 1) {
        const [src, dst] = report[i].split(' ');
        const srcIndex = id_list.indexOf(src);
        const dstIndex = id_list.indexOf(dst);
        if (!reportList[srcIndex].includes(dstIndex)) {
            reportCounts[dstIndex] += 1;
            reportList[srcIndex] = [...reportList[srcIndex], dstIndex]
        }
    }

    return reportList.map(
        (reportedArr) => reportedArr.filter(
            (reported) => reportCounts[reported] >= k
        ).length
    );
}

console.log(
    solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2)
);
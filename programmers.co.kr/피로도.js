function solution(k, dungeons) {
    let result = 0;
    
    f(k, dungeons);
    
    return result;
    
    function f(fatigue, dungeon) {
        let params = [];
        for (let i = 0; i < dungeon.length; i += 1) {
            const d = dungeon[i];
            if (fatigue >= d[0]) {
                params.push([fatigue - d[1], [...dungeon.slice(0, i), ...dungeon.slice(i + 1)]]);
            }
        }
        if (params.length === 0) {
            result = Math.max(result, dungeons.length - dungeon.length);
        } else {
            for (const param of params) {
                f(...param);
            }
        }
    }
}
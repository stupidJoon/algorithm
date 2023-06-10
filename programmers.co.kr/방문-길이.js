function solution(dirs) {
    const map = {};
    
    let len = 0;
    let [x, y] = [0, 0];
    for (const dir of dirs) {
        const direction = [x.toString() + y.toString()]
        
        if (dir === 'U') y += 1;
        if (dir === 'D') y -= 1;
        if (dir === 'R') x += 1;
        if (dir === 'L') x -= 1;
        
        if (x < -5) { x = -5; continue; }
        if (x > 5) { x = 5; continue; }
        if (y < -5) { y = -5; continue; }
        if (y > 5) { y = 5; continue; }
        
        direction.push(x.toString() + y.toString());
        direction.sort();
        
        const hash = direction.join('');
        if (map[hash]) continue;
        map[hash] = true;
        len += 1;
    }
    
    return len;
}